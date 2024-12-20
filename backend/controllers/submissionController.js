// import fs from "fs"; // For deleting the file
// import { Submission } from "../models/submission.js";
// import { setupEmailTransporter } from "../utils/email.js";

// export const submitPaper = async (req, res) => {
//   const {
//     authorName,
//     coAuthorName,
//     email,
//     phoneNumber,
//     university,
//     state,
//     designation,
//     department,
//     country,
//     category,
//   } = req.body;

//   if (!req.file) {
//     return res.status(400).json({ error: "File upload is required." });
//   }

//   try {
//     // Save submission to the database
//     const newSubmission = new Submission({
//       authorName,
//       coAuthorName,
//       email,
//       phoneNumber,
//       university,
//       state,
//       designation,
//       department,
//       country,
//       category,
//       filePath: req.file.path,
//     });

//     await newSubmission.save();

//     const transporter = setupEmailTransporter();

//     // Confirmation email to the user
//     await transporter.sendMail({
//       from: process.env.EMAIL,
//       to: email,
//       subject: "Paper Submission Confirmation",
//       text: `Dear ${authorName},\n\nYour paper submission has been received successfully.\n\nBest regards,\nConference Team`,
//     });

//     // Notification email to the admin with file attachment
//     await transporter.sendMail({
//       from: process.env.EMAIL,
//       to: process.env.ADMIN_EMAIL,
//       subject: "New Paper Submission Received",
//       text: `A new paper submission has been received.\n\nAuthor: ${authorName}\nCo-Author: ${coAuthorName}\nEmail: ${email}\nUniversity: ${university}\nCategory: ${category}\n\nThe submission file is attached to this email.`,
//       attachments: [
//         {
//           filename: req.file.originalname,
//           path: req.file.path,
//         },
//       ],
//     });

//     // Delete the uploaded file after emails are sent
//     fs.unlink(req.file.path, (err) => {
//       if (err) {
//         console.error("Error deleting file:", err);
//       } else {
//         console.log(`File ${req.file.filename} deleted successfully.`);
//       }
//     });

//     return res.status(200).json({ message: "Submission successful!" });
//   } catch (error) {
//     console.error("Error processing submission:", error);

//     // Clean up file in case of error
//     fs.unlink(req.file.path, (unlinkErr) => {
//       if (unlinkErr) {
//         console.error("Error cleaning up file:", unlinkErr);
//       }
//     });

//     if (error.name === "ValidationError") {
//       return res.status(400).json({ error: "Invalid data provided." });
//     } else if (error.name === "MongoError") {
//       return res.status(500).json({ error: "Database error occurred." });
//     }

//     return res.status(500).json({
//       error: "Unexpected server error occurred. Please try again later.",
//     });
//   }
// };
import { promises as fsPromises } from "fs"; // Use promises for better error handling
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

  const { path: filePath, originalname: fileName } = req.file;

  try {
    // Save submission to the database
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
      filePath,
    });

    await newSubmission.save();

    const transporter = setupEmailTransporter();

    // Confirmation email to the user
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Paper Submission Confirmation",
      text: `Dear ${authorName},\n\nYour paper submission has been received successfully.\n\nBest regards,\nConference Team`,
    });

    // Notification email to the admin with file attachment
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: "New Paper Submission Received",
      text: `A new paper submission has been received.\n\nAuthor: ${authorName}\nCo-Author: ${coAuthorName}\nEmail: ${email}\nUniversity: ${university}\nCategory: ${category}\n\nThe submission file is attached to this email.`,
      attachments: [
        {
          filename: fileName,
          path: filePath,
        },
      ],
    });

    // Delete the uploaded file after emails are sent
    await fsPromises.unlink(filePath);
    console.log(`File ${fileName} deleted successfully.`);

    return res.status(200).json({ message: "Submission successful!" });
  } catch (error) {
    console.error("Error processing submission:", error);

    // Clean up file in case of error
    try {
      await fsPromises.unlink(filePath);
      console.log(`File ${fileName} cleaned up due to an error.`);
    } catch (unlinkErr) {
      console.error("Error cleaning up file:", unlinkErr);
    }

    // Handle specific errors
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
