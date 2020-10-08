import express from "express";
import { AdminController } from "../Controller/AdminController";

const userRouter = express.Router();

userRouter.post("/", new AdminController().login)
userRouter.post("/signup", new AdminController().signup);

export default userRouter;
