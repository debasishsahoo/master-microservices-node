const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

// Get all posts
router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// Create post
router.post("/", async (req, res) => {
  const { title, content, userId } = req.body;
  const post = new Post({ title, content, userId });

  await post.save();
  res.status(201).json(post);
});

module.exports = router;
