import { createError } from "./../error.js";
import User from "../models/User.js";

export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          // Update user
          $set: req.body
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  } else {
    return next(createError(403, "You are not the user"));
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User deleted");
    } catch (error) {
      next(error);
    }
  } else {
    return next(createError(403, "You can only delete your own account"));
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const subscribe = async (req, res, next) => {
  // Find the x user, push the params id channel to x user's string of subscribedUser
  try {
    await User.findById(req.user.id, {
      $push: { subscribedUsers: req.params.id }
    });
    //Increament the subscribers of the params id channel
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 }
    });
    res.status(200).json("Subscribed to channel");
  } catch (error) {
    next(error);
  }
};

export const unsubscribe = async (req, res, next) => {
  try {
    await User.findById(req.user.id, {
      $pull: { subscribedUsers: req.params.id }
    });
    //Increament the subscribers of the params id channel
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: -1 }
    });
    res.status(200).json("Unsubscribing successful");
  } catch (error) {
    next(error);
  }
};

export const like = async (req, res, next) => {};

export const dislike = async (req, res, next) => {};
