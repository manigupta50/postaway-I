import { fetchAllPosts, fetchOnePost, addNewPost, usersPost, update, deletePostModel } from '../model/post.model.js';

// Controller for fetching all post
export const getAllPost = (req, res, next) => {
  const posts = fetchAllPosts();
  if(posts)
    res.json({ success: true, posts });
  else
    res.json({ success: false, msg: 'Could not find posts' });
};

// Controller for fetching one post
export const getOnePost = (req, res, next) => {
  const post = fetchOnePost(req.params.postId);
  if(post)
    res.json({ success: true, post });
  else
    res.json({ success: false, msg: 'Could not find post' });
};

// Controller for adding a post
export const newPost = (req, res, next) => {
  const post = addNewPost(req.userId, req.body);
  if(post)
    res.json({ success: true, msg: 'Post added successfully', post});
  else
    res.json({ success: false, msg: 'Post not added' });
};

// Controller for displaying user specific posts
export const userPost = (req, res, next) => {
  const posts = usersPost(req.params.userId);
  if(posts)
    res.json({ success: true, posts });
  else
    res.json({ success: false, msg: 'No posts found' });
};

export const updatePost = (req, res, next) => {
  const postId = req.params.postId;
  const post = update(req.body, postId);
  if(post)
    res.json({ success: true, msg: 'Post updated successfully', post});
  else
    res.json({ success: false, msg: 'Post not updated' });
};

export const deletePost = (req, res, next) => {
  const postId = req.params.postId;
  const post = deletePostModel(postId);
  if(post)
    res.json({ success: true, msg: 'Post deleted successfully', post});
  else
    res.json({ success: false, msg: 'Post not deleted' });
}