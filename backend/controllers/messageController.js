import dotenv from "dotenv";
import Message from "../models/messageModel.js";
import messageRouter from "../routes/messageRouter.js";
dotenv.config();

const messageController = {
	getMessagesByRoomId: async (req, res) => {
		if (req.user.isAdmin === true || req.user.userId === req.user.roomId) {
			const messages = await Message.findAll({
				include: ["user"],
				where: { roomId: req.param("roomId") },
				order: [["createdAt", "Asc"]],
			});

			res.send(messages);
		} else {
			res.status(401).send({ error: "Can get into chat" });
		}
	},
};

export default messageController;
