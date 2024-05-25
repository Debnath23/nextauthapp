import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type: String,
    unique: true,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    default: null,
  },
  views: {
    type: Number,
    default: 0,
  },
  catSlug: {
    type: String,
    required: true,
  },
  cat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  userEmail: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const Post = mongoose.models.posts || mongoose.model("posts", postSchema);

export default Post;
