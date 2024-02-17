import { addNewComment, updateCommentModel, deleteCommentModel } from '../model/comment.model.js';

// Controller for creating a comment
export const createComment = (req, res, next) => {
  const postId = req.params.postId;
  const commentData = req.body;
  const error = addNewComment(req.userId, postId, commentData);
  if (error) {
    return res.json({ success: false, msg: error.message });
  }
  res.json({ success: true, msg: 'Comment added successfully' });
};

// Controller for updating a comment
export const updateComment = (req, res, next) => {
  const postId = req.params.postId;
  const commentData = req.body;
  const error = updateCommentModel(req.userId, postId, commentData);
  if (error) {
    return res.json({ success: false, msg: error });
  }
  res.json({ success: true, msg: 'Comment updated successfully' });
};

// Controller for deleting a comment
export const deleteComment = (req, res, next) => {
  const postId = req.params.postId;
  const commentData = req.body;
  const error = deleteCommentModel(postId, commentData.id);
  if (error) {
    return res.json({ success: false, msg: error });
  }
  res.json({ success: true, msg: 'Comment deleted successfully' });
};
