// Hard coded posts data
export let posts = [
  {
    id: 1,
    userId: 1,
    heading: 'text',
    description: 'something',
    comments: [
      {
        userId: 1,
        commentId: 1,
        text: 'comment'
      }
    ],
    likes: [
      1,
      2
    ]
  },
  {
    id: 2,
    userId: 2,
    heading: 'text',
    description: 'something',
    comments: [
      {
        userId: 2,
        commentId: 2,
        text: 'comment'
      }
    ],
    likes: [
      1,
      3
    ]
  },
  {
    id: 3,
    userId: 3,
    heading: 'text',
    description: 'something',
    comments: [
      {
        userId: 3,
        commentId: 3,
        text: 'comment'
      }
    ],
    likes: [
      2,
      3
    ]
  }
];

// Model for fetching all post
export const fetchAllPosts = () => {
  return posts;
};

// Model for fetching one post
export const fetchOnePost = postId => {
  try {
    const post = posts.find(post => post.id == postId);
    return post;
  } catch(err) {
    throw new customErrorHandler(505, 'Something went wrong');
  }
};

// Model for adding a post
export const addNewPost = (userId, postData) => {
  try {
    addNewPost.id = posts.length + 1;
    const id = addNewPost.id;
    const post = posts.push( {id, userId, ...postData });
    return post;
  } catch(err) {
    console.log(err);
    throw new customErrorHandler(505, 'Something went wrong');
  }
};

// Model for fetching user specific posts
export const usersPost = (user) => {
  try {
    let allPosts = [];
    posts.forEach(post => {
      if(post.userId == user) {
        allPosts.push(post);
      }
    });
    return allPosts;
  } catch(err) {
    throw new customErrorHandler(505, 'Something went wrong');
  }
};

export const update = (data, postId) => {
  try {
    const post = posts.find(post => post.id == postId);
    let update = 0;
    if(data.heading) {
      post.heading = data.heading;
      update++;
    }
    if(data.description) {
      post.description = data.description;
      update++;
    }

    if(update > 0)
      return post;
    else
      return null;
  } catch(err) {
    throw new customErrorHandler(505, 'Something went wrong');
  }
};

export const deletePostModel = (postId) => {
  try {
    const post = posts.find(post => post.id == postId);
    const index = posts.indexOf(post);
    const remove = posts.splice(index, 1);
    return remove;
  } catch(err) {
    console.log(err);
    throw new customErrorHandler(505, 'Something went wrong');
  }
};