import express from "express";
import { verifyToken } from "./../verifyToken.js";
import {
  addVideo,
  getVideo,
  trendVideo,
  updateVideo,
  randomVideo,
  addView,
  sub
} from "../controller/video.js";

const router = express.Router();

//Create a video
router.post("/", verifyToken, addVideo);

//Update a video
router.put(":id/", verifyToken, updateVideo);

//Delete a video
router.delete("/:id", verifyToken);

//Get a video
router.get("/find/:id", getVideo);

router.put("/view/:id", addView);

//Get trending video
router.get("/trending", trendVideo);

//Get random video
router.get("/random", randomVideo);

//Get video from subscribed channels
router.get("/sub", verifyToken, sub);

export default router;
