import { addOrRemove, getAll } from "../model/like.model.js";

export const addOrRemoveController = (req, res) => {
  const postId = req.params.postId;
  const userId = req.params.userId;
  const like = addOrRemove(postId, userId);
  if (like) {
    return res.json({ success: true, msg: like.msg });
  }
  return res.json({ success: false, msg: 'Post not found' });
};

export const getAllLikes = (req, res) => {
  const postId = req.params.postId;
  const allLikes = getAll(postId);
  if(allLikes) {
    return res.json({userId: allLikes});
  }
  return res.json({success: false, msg: 'Post not found'});
};