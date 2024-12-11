import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import morgan from "morgan";
// import connectToDb from "./config/db.js";

configDotenv();

const PORT = process.env.PORT || 3000;

const app = express();

// connectToDb();

// Test for server is  running
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
