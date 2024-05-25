import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  desc: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  postSlug: {
    type: String,
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
});

const Comment =
  mongoose.models.comments || mongoose.model("comments", commentSchema);

export default Comment;
