import { Schema, model } from 'mongoose';

const opportunitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true, // Optional: Set to true for unique emails
    lowercase: true, // Convert email to lowercase for consistency
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
  },
});

export default model('Opportunity', opportunitySchema);
