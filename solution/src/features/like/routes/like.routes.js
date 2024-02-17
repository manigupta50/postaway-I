import express from "express";
import jwtAuth from "../../../middlewares/jwtAuth.js";
import { addOrRemoveController, getAllLikes } from "../controller/like.controller.js";

const router = express.Router();

// Routes for Adding and Removing cart items
router.route("/:userId/:postId").put(addOrRemoveController);
router.route("/:postId").get(getAllLikes);

export default router;
