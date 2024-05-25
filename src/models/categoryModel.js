import mongoose, { Schema } from "mongoose";

const categorySchema = new mongoose.Schema({
  slug: {
    type: String,
    unique: true,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    default: null,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const Category =
  mongoose.models.categorys || mongoose.model("categorys", categorySchema);

export default Category;
