import jwt from "jsonwebtoken";
import Message from "../models/messageModel.js";
import User from "../models/userModel.js";

let userSocketIdHashMap = {};

export let chatService = {
	io: null,

	setIo(io) {
		this.io = io;
	},

	joinChat(socket, jwtToken, roomId, callback) {
		jwt.verify(jwtToken, process.env.JWT_SECRET, (err, decode) => {
			if (err) {
				callback(new Error("Invalid Token"));
			} else {
				socket.join(roomId);

				userSocketIdHashMap[socket.client.id] = {
					userId: decode.id,
					isAdmin: decode.isAdmin,
				};
				callback();
			}
		});
	},

	disconnectChat(socketId) {
		delete userSocketIdHashMap[socketId];
	},

	async sendMessage(socketId, message, roomId, callback) {
		try {
			const { userId, isAdmin } = userSocketIdHashMap[socketId];

			const messageData = await Message.create({
				roomId: isAdmin ? roomId : userId,
				userId,
				message,
			});

			const messageDataLoaded = await Message.findByPk(messageData.id, {
				include: ["user"],
			});

			this.io.to(roomId).emit("message", messageDataLoaded.dataValues);

			callback();
		} catch (err) {
			callback(err);
		}
	},
};
