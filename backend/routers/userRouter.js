import express from "express";
import userController from "../controllers/userController.js";
import { isAuth } from "../utils.js";
const userRouter = express.Router();

userRouter.get("/", userController.getUser);

userRouter.post("/signin", userController.signinUser);

userRouter.post("/register", userController.registerUser);

userRouter.get("/:id", userController.getUserDetailsById);

userRouter.put("/profile", isAuth, userController.putProfile);

export default userRouter;
