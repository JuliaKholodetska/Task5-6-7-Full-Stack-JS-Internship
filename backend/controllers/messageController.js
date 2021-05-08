import dotenv from "dotenv";
import Message from "../models/messageModel.js";
dotenv.config();

const messageController = {
	getMessagesByRoomId: async (req, res) => {
		const { isAdmin, id } = req.user;
		const { roomId } = req.params;
		if (!isAdmin && String(id) !== String(roomId)) {
			return res.status(401).send({ error: "Can get into chat" });
		}

		const messages = await Message.findAll({
			include: ["user"],
			where: { roomId: roomId },
			order: [["createdAt", "Asc"]],
		});

		res.send(messages);
	},
};
export default messageController;
