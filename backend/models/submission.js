import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  authorName: String,
  coAuthorName: String,
  email: String,
  phoneNumber: String,
  university: String,
  state: String,
  designation: String,
  department: String,
  country: String,
  category: String,
  filePath: String,
  date: { type: Date, default: Date.now },
});

export const Submission = mongoose.model("Submission", submissionSchema);
