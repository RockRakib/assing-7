import mongoose, { Document, Schema } from 'mongoose';

// Define the interface representing a leaderboard entry
interface LeaderboardEntry extends Document {
  donorName: string;
  donationAmount: number;
  // You can add more fields as needed
}

const leaderboardSchema: Schema<LeaderboardEntry> = new Schema({
  donorName: {
    type: String,
    required: true,
  },
  donationAmount: {
    type: Number,
    required: true,
  },
  // Add more fields as needed
});

// Define the model
const Leaderboard = mongoose.model<LeaderboardEntry>('Leaderboard', leaderboardSchema);

export default Leaderboard;
