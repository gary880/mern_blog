import express from 'express';


const router = express.Router();

import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';





export default router;