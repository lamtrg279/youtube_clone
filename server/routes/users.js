import express from "express";
import {
  update,
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  like,
  dislike
} from "../controller/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//Update user
router.put("/:id", verifyToken, update);

//Delete user
router.delete("/:id", verifyToken, deleteUser);

//Get user
router.get("/find/:id", getUser);

//Subscribe to user
router.put("/sub/:id", verifyToken, subscribe);

//Unsubscribe to user
router.put("/unsub/:id", verifyToken, unsubscribe);

//Like a video
router.put("/like/:videoid", verifyToken, like);

//Dislike a video
router.put("/dislike/:videoid", verifyToken, dislike);

export default router;
