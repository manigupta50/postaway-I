import express from 'express';
import { newPost, getOnePost, getAllPost, userPost, updatePost, deletePost } from '../controller/post.controller.js';
import jwtAuth from '../../../middlewares/jwtAuth.js';

const router = express.Router();

// Routes for CRUD operations on posts
router.route('/').post(jwtAuth, newPost);
router.route('/').get(jwtAuth, getAllPost);
router.route('/users/:userId').get(jwtAuth, userPost);
router.route('/:postId').get(getOnePost);
router.route('/:postId').put(jwtAuth, updatePost);
router.route('/:postId').delete(jwtAuth, deletePost);

export default router;
