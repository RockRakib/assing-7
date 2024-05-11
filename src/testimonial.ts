import { Schema, model } from 'mongoose';

const testimonialSchema = new Schema({
  donorName: { type: String, required: true },
  content: { type: String, required: true },
});
export default model('testimonial', testimonialSchema);
