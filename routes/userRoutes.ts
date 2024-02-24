import express from "express";
import { getUserData } from "../controller/userController";
const userRouter = express.Router();

userRouter.route("/").get(getUserData);

export default userRouter;
