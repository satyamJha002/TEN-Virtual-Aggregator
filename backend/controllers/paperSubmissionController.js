import PaperSubmission from "../models/paperSubmission.js";
import { setupEmailTransporter } from "../utils/email.js";
import { promises as fsPromises } from "fs";

export const paperSubmission = async (req, res) => {
  const {
    name,
    email,
    countryCode,
    phone,
    paperTitle,
    institute,
    modeOfPresentation,
    journalPublication,
    comments,
    conferenceCountry,
    conferenceCity,
    dateOfConference,
    conferenceName,
  } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: "File upload is required." });
  }

  const { path: filePath, originalname: fileName } = req.file;

  try {
    const newPaperSubmission = new PaperSubmission({
      name,
      email,
      countryCode,
      phone,
      paperTitle,
      institute,
      modeOfPresentation,
      journalPublication,
      comments,
      conferenceCountry,
      conferenceCity,
      dateOfConference,
      conferenceName,
      filePath,
    });

    await newPaperSubmission.save();
    console.log(newPaperSubmission);

    const transporter = setupEmailTransporter();

    // Confirmation email to the user
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Paper Submission Confirmation",
      text: `Dear ${name},\n\nYour paper submission for ${conferenceName} has been received successfully.\n\nBest regards,\nConference Team`,
    });

    // Notification email to the admin with file attachment
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: "New Paper Submission Received",
      text: `A new paper submission has been received.\n\nAuthor: ${name}\nEmail: ${email}\nPhone: ${countryCode} ${phone}\nPaper Title: ${paperTitle}\nInstitute: ${institute}\nMode of Presentation: ${modeOfPresentation}\nJournal Publication: ${journalPublication}\nConference: ${conferenceName} (${conferenceCity}, ${conferenceCountry} on ${dateOfConference})\n\nComments:\n${comments}`,
      attachments: [{ filename: fileName, path: filePath }],
    });

    // Delete the uploaded file after emails are sent
    await fsPromises.unlink(filePath);

    res.status(201).json({ message: "Paper submission successful" });
  } catch (error) {
    console.error(error);

    // Cleanup uploaded file in case of failure
    try {
      await fsPromises.unlink(filePath);
    } catch (unlinkErr) {
      console.error("Error cleaning up file:", unlinkErr);
    }

    const errorMessage =
      error.name === "ValidationError"
        ? "Validation error: Please provide all required fields."
        : "Unexpected server error. Please try again.";
    res.status(500).json({ error: errorMessage });
  }
};
