import express from "express";
import { signin, signup } from "../controller/auth.js";

const router = express.Router();

//* Create a user
router.post("/signup", signup);

//* Sign in
router.post("/signin", signin);

//* Google Auth
router.post("/google");

export default router;
