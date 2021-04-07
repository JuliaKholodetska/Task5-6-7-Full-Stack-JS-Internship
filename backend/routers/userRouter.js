import express from "express";
import userController from "../controllers/userController.js";
import {
	validateEmail,
	validatePassword,
} from "../middleware/checkUserInput.js";
import { isAuth } from "../middleware/utils.js";

const userRouter = express.Router();

userRouter.get("/", userController.getUser);

userRouter.post("/signin", userController.signinUser);

userRouter.post(
	"/register",
	validatePassword(["password"]),
	validateEmail(["email"]),
	userController.registerUser
);

userRouter.get("/:id", userController.getUserDetailsById);

userRouter.put("/profile", isAuth, userController.putProfile);

export default userRouter;
