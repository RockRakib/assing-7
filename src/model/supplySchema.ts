import { Schema, model } from 'mongoose';

const supplySchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Optional: Path to the uploaded image
  },
});

export default model('Supply', supplySchema);
