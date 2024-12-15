// config/db.js

import mongoose from "mongoose";

export const connectToDb = async (MONGO_URI) => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB successfully.");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit the process on failure
  }
};
