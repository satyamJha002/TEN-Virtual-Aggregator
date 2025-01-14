import mongoose from "mongoose";

const paperSubmitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    countryCode: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    paperTitle: {
      type: String,
      required: true,
    },
    institute: {
      type: String,
      required: true,
    },
    modeOfPresentation: {
      type: String,
      required: true,
    },
    journalPublication: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
      required: false, // Comments are optional
    },
    conferenceCountry: {
      type: String,
      required: true,
    },
    conferenceCity: {
      type: String,
      required: true,
    },
    dateOfConference: {
      type: String,
      required: true,
    },
    conferenceName: {
      type: String,
      required: true,
    },
    filePath: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const PaperSubmission = mongoose.model("PaperSubmission", paperSubmitSchema);

export default PaperSubmission;
