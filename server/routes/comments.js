import express from "express";
import {
  addComment,
  deleteComment,
  getComment,
  updateComment
} from "../controller/comment.js";
import { verifyToken } from "./../verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, addComment);
router.put("/:id", verifyToken, updateComment);
router.delete("/:id", verifyToken, deleteComment);
router.get("/:videoId", verifyToken, getComment);

export default router;
