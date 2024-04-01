import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    leetcode: { type: String, required: false },
    codechef: { type: String, required: false },
    codeforces: { type: String, required: false },
  },
  { timestamps: true }
);
export default mongoose.models.User || mongoose.model("UserCC", userSchema);
