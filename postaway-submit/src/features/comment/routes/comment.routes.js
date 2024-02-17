import express from 'express';
import jwtAuth from '../../../middlewares/jwtAuth.js';
import {
  createComment,
  updateComment,
  deleteComment
} from '../controller/comment.controller.js';

const router = express.Router();

// Create, Update, Delete routes for Comments
router.route('/:postId').post(createComment);
router.route('/:postId').put(updateComment);
router.route('/:postId').delete(deleteComment);

export default router;
