const users = [];
let id = 0;

// Class for creating new User object
class UserSchema {
  constructor(name, email, password) {
    this.id = ++id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

// Model for adding a new user
export const addUser = (name, email, password) => {
  // const { name, email, password } = data;
  const newUser = new UserSchema(name, email, password);
  users.push(newUser);
  return newUser;
};

// Model for confirming login
export const confirmLogin = data => {
  const { email, password } = data;
  console.log(email, password);
  let userResult = null;
  users.forEach(user => {
    if (user.email === email && user.password === password) userResult = user;
  });
  return userResult;
};

// Model for fetching all users
export const getAllUsers = () => {
  return users;
};
