import { Schema, model } from 'mongoose';

const commentSchema = new Schema({
  username: { type: String, required: true },
  comment: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default model('Comment', commentSchema);
