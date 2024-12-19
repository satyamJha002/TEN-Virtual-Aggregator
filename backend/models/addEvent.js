import mongoose from "mongoose";

const addEventScehma = new mongoose.Schema({});

const AddEvent = mongoose.model("AddEvent", addEventScehma);

export default AddEvent;
