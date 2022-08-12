import express from "express";
import {} from "../controller/video.js";
import { verifyToken } from "./../verifyToken.js";
import { addVideo } from "./../controller/video.js";

const router = express.Router();

//Create a video
router.post("/", verifyToken, addVideo);

//Update a video
router.put(":id/", verifyToken);

//Delete a video
router.delete("/:id", verifyToken);

//Get a video
router.get("/find/:id");

export default router;
