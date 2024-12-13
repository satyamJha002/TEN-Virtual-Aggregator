import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv();

const connectDB = async (connectionUrl) => {
  try {
    await mongoose.connect(connectionUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB : " + connectionUrl);
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

export default connectToDb;
