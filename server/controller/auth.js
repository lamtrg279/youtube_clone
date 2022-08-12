import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const signup = async (req, res, next) => {
  try {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash }); //* Take every with spread operator, but change password

    await newUser.save(); //* Save to mongoDB
    res.status(200).send("User created");
  } catch (err) {
    next(err);
  }
};

export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    if (!user) return next(createError(404, "User not found"));

    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) return next(createError(403, "Wrong username or password"));

    const token = jwt.sign({ id: user._id }, process.env.JWT);

    const { password, ...others } = user._doc; //*Separate password and the rest of package

    res
      .cookie("access_token", token, {
        httpOnly: true
      })
      .status(200)
      .json(others);
  } catch (err) {
    next(err);
  }
};
