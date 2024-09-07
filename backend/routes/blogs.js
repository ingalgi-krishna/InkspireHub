import express from 'express';
import Blog from '../models/Blog.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

router.get('/:id', async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.json(blog);
});

router.post('/', async (req, res) => {
  const blog = new Blog(req.body);
  await blog.save();
  res.json(blog);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
  res.json(blog);
});

router.post('/:id/comments', async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);
  blog.comments.push(req.body);
  await blog.save();
  res.json(blog);
});

router.post('/:id/like', async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);
  blog.likes += 1;
  await blog.save();
  res.json(blog);
});

export default router;
