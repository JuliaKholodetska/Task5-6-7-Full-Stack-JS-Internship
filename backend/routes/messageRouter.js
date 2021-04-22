import express from "express";
import messageController from "../controllers/messageController.js";
import { ensureAuthenticated } from "../middleware/validator.js";
import asyncHandler from "express-async-handler";
const messageRouter = express.Router();

messageRouter.get(
	"/:roomId",
	ensureAuthenticated,
	asyncHandler(messageController.getMessagesByRoomId)
);

export default messageRouter;
