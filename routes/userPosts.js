const router = require("express").Router();
const Post = require("../models/post");
const User = require("../models/userModel")

// Creating post 

router.post("/news", async (req, res) => {
    const newPost = new Post(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//updating post
router.put("/news:id", async (req, res) => {
try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        { new: true }
        );
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json(err);
    }
    } else {
    res.status(401).json("You can update only your post!");
    }
} catch (err) {
    res.status(500).json(err);
}
});

//deleting post
router.delete("/:id", async (req, res) => {
try {
    const post = await Post.findById(req.params.id);
    if (post.name === req.body.name) {
    try {
        await post.delete();
        res.status(200).json("Post has been successfully deleted!");
    } catch (err) {
        res.status(500).json(err);
    }
    } else {
    res.status(401).json("You can delete only your post!");
    }
} catch (err) {
    res.status(500).json(err);
}
});

  module.exports = router;
