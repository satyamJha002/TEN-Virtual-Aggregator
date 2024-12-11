import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv();

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongodb is connected`);
  } catch (error) {
    console.log(`Error coming connection to mongodb`, error);
  }
};

export default connectToDb;
