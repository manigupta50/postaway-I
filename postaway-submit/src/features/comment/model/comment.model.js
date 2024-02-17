import { customErrorHandler } from '../../../middlewares/errorHandler.js';
import { fetchAllPosts } from '../../post/model/post.model.js';

// Pre created comments
const comments = [
  {
    id: 1,
    postId: 1,
    userId: 1,
    text: 'text'
  },
  {
    id: 2,
    postId: 1,
    userId: 1,
    text: 'text'
  },
  {
    id: 3,
    postId: 1,
    userId: 1,
    text: 'text'
  }
];

// Model for adding a new comment
export const addNewComment = (userId, postId, commentData) => {
  const allPosts = fetchAllPosts();
  const post = allPosts.find(post => post.id == postId);
  try {
    if (post && commentData.text) {
      let commentsLength = comments.length + 1;
      post.comments.push({
        userId: userId,
        commentId: commentsLength,
        text: commentData.text
      });
      comments.push({
        id: commentsLength,
        postId: postId,
        userId: userId,
        text: commentData.text
      });
    } else {
      return new customErrorHandler(422, 'Invalid data' );
    }
  } catch(err) {
    throw new customErrorHandler(505, 'Something went wrong');
  }
};

// Model for updating a comment
export const updateCommentModel = (userId, postId, commentData) => {
  const allPosts = fetchAllPosts();
  const post = allPosts.find(post => post.id == postId);
  const postComments = post.comments.find(postComment => 
    postComment.commentId == commentData.id && postComment.userId == userId
  );
  const index = post.comments.indexOf(postComments);
  const comment = comments.find(comment => comment.id == commentData.id);
  try {
    if (post && postComments) {
      comment.text = commentData.text;
      post.comments.splice(index, 1);
      post.comments.push({
        userId: userId,
        commentId: commentData.id,
        text: commentData.text
      });
    } else {
      return 'Post/Comment not found';
    }
  } catch(err) {
    console.log(err);
    throw new customErrorHandler(505, 'Something went wrong');
  }
};

// Model for deleting a comment
export const deleteCommentModel = (postId, commentId) => {
  const allPosts = fetchAllPosts();

  const post = allPosts.find(post => post.id == postId);
  try {
    if (post) {
      const commentIndexInPost = post.comments.findIndex(
        comment => comment.commentId == commentId
      );

      if (commentIndexInPost !== -1) {
        post.comments.splice(commentIndexInPost, 1);
      } else {
        return 'Comment not found in the post';
      }
    } else {
      return 'Post not found';
    }

    const commentIndex = comments.findIndex(comment => comment.id == commentId);

    if (commentIndex !== -1) {
      comments.splice(commentIndex, 1);
    } else {
      return 'Comment not found in the comments array';
    }
  } catch(err) {
    console.log(err);
    throw new customErrorHandler(505, 'Something went wrong');
  }
};
