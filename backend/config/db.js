import mongoose from "mongoose";

export const connectToDb = async (connectionUrl) => {
  try {
    await mongoose.connect(connectionUrl);
    console.log("Connected to MongoDB: " + connectionUrl);
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1);
  }
};
