import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { connectToDb } from "./config/db.js";
import submissionRoutes from "./routes/submission.js";
import contactRoute from "./routes/contactRoute.js";
import eventRoute from "./routes/addEventRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/uploads", express.static("uploads"));

connectToDb(process.env.MONGO_URI);
app.use("/submit", submissionRoutes);
// app.use("/api/submissions", submissionRoutes);
app.use("/api", contactRoute);
app.use("/api", eventRoute);
app.get("/", (req, res) => {
  res.send("Welcome to Virtual Conference");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
