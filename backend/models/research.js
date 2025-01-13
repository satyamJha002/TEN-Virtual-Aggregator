import mongoose from "mongoose";

const researchSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  researchField: {
    type: String,
    required: true,
  },
});

const Research = mongoose.model("Research", researchSchema);

export default Research;
