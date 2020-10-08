import express from "express";
import { OfficeController } from "../Controller/OfficeController";

const userRouter = express.Router();

userRouter.post("/new", new OfficeController().newOffice);
userRouter.get("", new OfficeController().listOffices);

export default userRouter;