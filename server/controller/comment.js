import Comment from "../models/Comments.js";
import Video from "../models/Video.js";
import { createError } from "./../error.js";

//* Add comment
export const addComment = async (req, res, next) => {
  const newComment = new Comment({ ...req.body, userId: req.user.id });
  try {
    await newComment.save();
    res.status(200).json(newComment);
  } catch (error) {
    next(error);
  }
};

//* delete comment
export const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    const video = await Video.findById(req.params.id);

    if (req.user.id === comment.userId || req.user.id === video.userId) {
      await Comment.findByIdAndDelete(req.params.id);
      res.status(200).json("Comment deleted");
    } else {
      return next(createError(403, "You can delete only your comments"));
    }
  } catch (error) {
    next(error);
  }
};

//* update comment
export const updateComment = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

//* Get all comments from video
export const getComment = async (req, res, next) => {
  try {
    const comments = await Comment.find({ videoId: req.params.videoId });
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};
