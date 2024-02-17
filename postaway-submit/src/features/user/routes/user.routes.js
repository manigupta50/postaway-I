import express from "express";
import { allUsers, loginUser, registerUser } from "../controller/user.controller.js";

const router = express.Router();

// Routes for user registration and login
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/users").get(allUsers);

export default router;
