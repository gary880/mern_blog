import Post from "../models/posts.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new Post(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    const updatedPost = await Post.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
    res.json(updatedPost);
}


export const getPost = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    const post = await Post.findById(_id);
    res.json(post);
}


export const deletePost = async (req, res) => {
    const { id: _id } = req.body;
    console.log(`${_id} deleted`);
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    const post = await Post.findByIdAndDelete(_id);
    res.status(200).json({ message: "Post deleted" });
}

export const getPostsByTag = async (req, res) => {
    // find posts with the same tag in tag array
    const { tag } = req.params;
    const posts = await Post.find({ tags: tag });
    res.json(posts);
}