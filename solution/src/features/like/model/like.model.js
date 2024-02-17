import { posts } from "../../post/model/post.model.js";

export const addOrRemove = (postId, userId) => {
  try {
    const post = posts.find(post => post.id == postId);
    if(post) {
      if(!post.likes.includes(Number(userId))) { // to add the like
        post.likes.push(Number(userId));
        return {msg: 'Like added successfully', post};
      } else { // To remove the like
        const index = post.likes.indexOf(Number(userId));
        post.likes.splice(index, 1);
        return {msg: 'Like removed successfully', post};
      }
    }
    return post;
  } catch(err) {
    console.log(err);
    throw new customErrorHandler(505, 'Something went wrong');
  }
};

export const getAll = (postId) => {
  try {
    const allLikes = posts.find(post => post.id == postId);
    if(allLikes) {
      return allLikes.likes;
    } else {
      return null;
    }
  } catch(err) {
    console.log(err);
    throw new customErrorHandler(505, 'Something went wrong');
  }
};