import { Schema, model } from 'mongoose';

const donorSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, unique: true }, // Allow optional username for privacy
  donationAmount: { type: Number, required: true },
});

export default model('Donor', donorSchema);
