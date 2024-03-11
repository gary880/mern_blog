import express from 'express';
import { getPosts, createPost, getPost, deletePost, updatePost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/delete', auth, deletePost);
router.post('/updatePost/:id', auth, updatePost);
router.post('/', auth, createPost);




export default router;