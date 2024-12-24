import mongoose from "mongoose";

const journalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ISSN: {},
});
