import Video from "../models/Video.js";
import User from "../models/User.js";
import { createError } from "./../error.js";

//* Add video
export const addVideo = async (req, res, next) => {
  // Don't need to include id in json payload when calling request
  const newVideo = new Video({ userId: req.user.id, ...req.body });
  try {
    const savedVideo = await newVideo.save();
    res.status(200).json(savedVideo);
  } catch (error) {
    next(error);
  }
};

//* Update video
export const updateVideo = async (req, res, next) => {
  try {
    const video = await Video.findByIdAndUpdate(req.params.id);
    if (!video) return next(createError(404, "Video not found"));
    if (req.user.id === video.userId) {
      const updatedVideo = await Video.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body
        },
        { new: true }
      );
      res.status(200).json(updatedVideo);
    } else {
      return next(createError(404, "You can't edit this video"));
    }
  } catch (error) {
    next(error);
  }
};

//* Delete video
export const deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findByIdAndUpdate(req.params.id);
    if (!video) return next(createError(404, "Video not found"));
    if (req.user.id === video.userId) {
      await Video.findByIdAndDelete(req.params.id);
      res.status(200).json("Video deleted");
    } else {
      return next(createError(404, "You can't delete this video"));
    }
  } catch (error) {
    next(error);
  }
};

//* Get video by id
export const getVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json(video);
  } catch (error) {
    next(error);
  }
};

//* Get random video
export const randomVideo = async (req, res, next) => {
  try {
    const video = await Video.aggregate([{ $sample: { size: 40 } }]);
    res.status(200).json(video);
  } catch (error) {
    next(error);
  }
};

//* Get video by view count
export const trendVideo = async (req, res, next) => {
  try {
    const videos = await Video.find().sort({ views: -1 });
    res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};

//* Get video from subscribed channels
export const sub = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const subscribedChannels = user.subscribedUsers;

    const list = await Promise.all(
      subscribedChannels.map((channelId) => {
        return Video.find({ userId: channelId });
      })
    );

    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};

//* Get videos by tags
export const tags = async (req, res, next) => {
  const tags = req.query.tags.split(",");
  try {
    const videos = await Video.find({ tags: { $in: tags } }).limit(20);
    res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};

//* Search video
export const search = async (req, res, next) => {
  const query = req.query.q;
  try {
    const videos = await Video.find({
      title: { $regex: query, $options: "i" }
    }).limit(40);
    res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};

//* Add video
export const addView = async (req, res, next) => {
  try {
    await Video.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 }
    });
    res.status(200).json("View updated");
  } catch (error) {
    next(error);
  }
};
