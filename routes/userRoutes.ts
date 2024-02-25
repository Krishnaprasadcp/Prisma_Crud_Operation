import express from "express";
import { getUserData, postUserData } from "../controller/userController";
const userRouter = express.Router();

userRouter.route("/").get(getUserData).post(postUserData);

export default userRouter;
