import express from "express";
import userController from "../controllers/userController.js";
import { ensureAuthenticated } from "../middleware/validator.js";
import asyncHandler from "express-async-handler";

const userRouter = express.Router();

userRouter.get("/", asyncHandler(userController.getUsers));

userRouter.post("/signin", asyncHandler(userController.signinUser));

userRouter.post("/register", userController.registerUser);

userRouter.get("/:id", asyncHandler(userController.getUser));

userRouter.put(
	"/profile",
	ensureAuthenticated,
	asyncHandler(userController.updateProfile)
);

export default userRouter;