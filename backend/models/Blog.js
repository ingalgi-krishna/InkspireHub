import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  author: String,
  content: String,
});

const blogSchema = new mongoose.Schema({
  author: String,
  title: String,
  description: String,
  likes: { type: Number, default: 0 },
  comments: [commentSchema],
});

export default mongoose.model('Blog', blogSchema);
