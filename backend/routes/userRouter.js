import express from "express";
import userController from "../controllers/userController.js";
import {
	ensureAuthenticated,
	validatRequestSchema,
} from "../middleware/validator.js";
import asyncHandler from "express-async-handler";
import { registerSchema } from "../schema/registerSchema.js";
const userRouter = express.Router();

userRouter.get("/", asyncHandler(userController.getUsers));

userRouter.post("/signin", asyncHandler(userController.signinUser));

userRouter.post("/signinGoggle", asyncHandler(userController.checkGoogleUser));

userRouter.post(
	"/register",
	registerSchema,
	validatRequestSchema,
	userController.registerUser
);

userRouter.get("/:id", asyncHandler(userController.getUser));

userRouter.put(
	"/profile",
	ensureAuthenticated,
	asyncHandler(userController.updateProfile)
);

export default userRouter;
