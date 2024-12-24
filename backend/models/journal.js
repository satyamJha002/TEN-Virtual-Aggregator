import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const uuid = uuidv4();

const journalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ISSN: { type: String, default: uuid, unique: true, required: true },
});

const Journal = mongoose.model("Journal", journalSchema);

export default Journal;
