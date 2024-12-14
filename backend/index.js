// import express from "express";
// import cors from "cors";
// import { configDotenv } from "dotenv";
// import morgan from "morgan";
// // import connectToDb from "./config/db.js";

// configDotenv();

// const PORT = process.env.PORT || 3000;

// const app = express();

// // connectToDb();

// // Test for server is  running
// app.get("/", (req, res) => {
//   res.send("Server is running");
// });

// app.use(cors());
// app.use(express.json());
// app.use(morgan("dev"));

// app.listen(PORT, () => {
//   console.log(`Server is running at ${PORT}`);
// });
// Import required packages
import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import fs from "fs/promises"; // Import the promises API of fs
import { Submission } from "./models/submission.js";
import { setupEmailTransporter } from "./utils/email.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Multer Setup for File Uploads
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 15 * 1024 * 1024 }, // Limit file size to 15MB
}).single("file");

// Submit Endpoint
app.post("/submit", upload, async (req, res) => {
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

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
