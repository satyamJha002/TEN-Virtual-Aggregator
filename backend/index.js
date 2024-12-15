import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import fs from "fs/promises";
import { Submission } from "./models/submission.js";
import { upload } from "./middlewares/multer.js"; // Make sure to import the correct upload middleware
import { setupEmailTransporter } from "./utils/email.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/uploads", express.static("uploads"));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Root endpoint
app.get("/", (req, res) => {
  res.send("Welcome to Virtual Conference");
});

// POST route for file submission
app.post("/submit", upload.single("file"), async (req, res) => {
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
    // Save Submission to Database
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

    // Email Notifications
    const transporter = setupEmailTransporter();

    // Send Confirmation Email to User
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Paper Submission Confirmation",
      text: `Dear ${authorName},\n\nYour paper submission has been received successfully.\n\nBest regards,\nConference Team`,
    });

    // Send Notification Email to Admin
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

    // Delete the file after sending emails
    await fs.unlink(req.file.path);

    res.status(200).json({ message: "Submission successful !" });
  } catch (error) {
    console.error("Error saving submission or sending email:", error);

    // Ensure the file is deleted even if an error occurs
    if (req.file && req.file.path) {
      try {
        await fs.unlink(req.file.path);
      } catch (unlinkError) {
        console.error("Error deleting file:", unlinkError);
      }
    }

    res
      .status(500)
      .json({ error: "An error occurred while processing your submission." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
