import mongoose from "mongoose";

const brochureSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Brochure = mongoose.model("Brochure", brochureSchema);

export default Brochure;
