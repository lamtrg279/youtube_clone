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

router.get("/");

//Update user
router.put("/:id", verifyToken, update);

//Delete user
router.delete("/:id", deleteUser);

//Get user
router.get("/find/:id", getUser);

//Subscribe to user
router.put("/sub/:id", subscribe);

//Unsubscribe to user
router.put("/unsub/:id", unsubscribe);

//Like a video
router.put("/like/:videoid", like);

//Dislike a video
router.put("/dislike/:videoid", dislike);

export default router;
