import { Submission } from "../models/submission.js";
import { setupEmailTransporter } from "../utils/email.js";

export const submitPaper = async (req, res) => {
  const {
    authorName,
    coAuthorName,
    email,
    phoneNumber,
    university,
    state,
    designation,
    department,
    country,
    category,
  } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: "File upload is required." });
  }
  try {
    const newSubmission = new Submission({
      authorName,
      coAuthorName,
      email,
      phoneNumber,
      university,
      state,
      designation,
      department,
      country,
      category,
      filePath: req.file.path,
    });

    await newSubmission.save();
    const transporter = setupEmailTransporter();
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Paper Submission Confirmation",
      text: `Dear ${authorName},\n\nYour paper submission has been received successfully.\n\nBest regards,\nConference Team`,
    });
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: "New Paper Submission Received",
      text: `A new paper submission has been received.\n\nAuthor: ${authorName}\nCo-Author: ${coAuthorName}\nEmail: ${email}\nUniversity: ${university}\nCategory: ${category}\n\nThe submission file is attached to this email.`,
      attachments: [
        {
          filename: req.file.originalname,
          path: req.file.path,
        },
      ],
    });

    return res.status(200).json({ message: "Submission successful!" });
  } catch (error) {
    console.error("Error processing submission:", error);
    if (error.name === "ValidationError") {
      return res.status(400).json({ error: "Invalid data provided." });
    } else if (error.name === "MongoError") {
      return res.status(500).json({ error: "Database error occurred." });
    }
    return res.status(500).json({
      error: "Unexpected server error occurred. Please try again later.",
    });
  }
};
