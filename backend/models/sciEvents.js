import mongoose from 'mongoose';

const sciEventSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  month: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model('SciEvent', sciEventSchema);