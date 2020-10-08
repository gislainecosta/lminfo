import express from "express";
import { EmployeeController } from "../Controller/EmployeeController";

const userRouter = express.Router();

userRouter.post("/new", new EmployeeController().newEmployee);
userRouter.get("/employee", new EmployeeController().showEmployee);
userRouter.get("", new EmployeeController().listEmployees);

export default userRouter;