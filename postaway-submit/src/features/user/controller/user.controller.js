import { addUser, confirmLogin, getAllUsers } from "../model/user.model.js";
import jwt from "jsonwebtoken";

// Controller for User Registration
export const registerUser = (req, res, next) => {
  const { name, email, password } = req.body;
  if (name && email && password) {
    let user = addUser(name, email, password);
    res.status(201).send({ status: "success", user });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};

// Controller for User Login
export const loginUser = (req, res) => {
  let status = confirmLogin(req.body);
  console.log("status is", status);
  if (status) {
    const token = jwt.sign(
      { userId: status.id, userEmail: status.email },
      "ninja",
      { expiresIn: "1h" }
    );
    res
      .status(201)
      .cookie('jwtToken', token, {maxAge: 900000, httpOnly: false})
      .cookie("userId", status.id, { maxAge: 900000, httpOnly: false })
      .json({ status: "success", msg: "login successful", token});
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};

export const allUsers = (req, res) => {
  const users = getAllUsers();
  return res.status(200).json({users: users})
}
