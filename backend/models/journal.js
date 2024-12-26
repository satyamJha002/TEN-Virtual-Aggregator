import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const journalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ISSN: { type: String, default: () => uuidv4(), unique: true, required: true },
});

const Journal = mongoose.model("Journal", journalSchema);

export default Journal;
