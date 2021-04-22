import dotenv from "dotenv";
import Message from "../models/messageModel.js";
dotenv.config();

const messageController = {
	getMessagesByRoomId: async (req, res) => {
		if (
			req.user.isAdmin === false &&
			String(req.user.id) !== String(req.params.roomId)
		) {
			return res.status(401).send({ error: "Can get into chat" });
		}

		const messages = await Message.findAll({
			include: ["user"],
			where: { roomId: req.params.roomId },
			order: [["createdAt", "Asc"]],
		});

		res.send(messages);
	},
};

export default messageController;
