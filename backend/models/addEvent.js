import mongoose from "mongoose";

const addEventScehma = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventTitle: {
    type: String,
    required: true,
  },
  eventType: {
    type: String,
    required: true,
  },
  eventTopic: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  venueAddress: {
    type: String,
    required: true,
  },
  organizingSociety: {
    type: String,
    required: true,
  },
  contactPerson: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  websiteAddress: {
    type: String,
    required: true,
  },
  eventMonthYear: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  submissionDeadline: {
    type: Date,
    required: true,
  },
  registrationDeadline: {
    type: Date,
    required: true,
  },
  abstracts: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
    required: true,
  },
});

const AddEvent = mongoose.model("AddEvent", addEventScehma);

export default AddEvent;
