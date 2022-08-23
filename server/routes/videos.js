import express from "express";
import { verifyToken } from "./../verifyToken.js";
import {
  addVideo,
  getVideo,
  trendVideo,
  updateVideo,
  randomVideo,
  addView,
  sub,
  tags,
  search
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

//View a video
router.put("/view/:id", addView);

//Get trending video
router.get("/trending", trendVideo);

//Get random video
router.get("/random", randomVideo);

//Get video from subscribed channels
router.get("/sub", verifyToken, sub);

//Get video from tags
router.get("/tags", tags);

//Get video from search
router.get("/search", search);

export default router;
