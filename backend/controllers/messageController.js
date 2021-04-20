
import dotenv from "dotenv";
import Message from "../models/messageModel.js";
dotenv.config();

const messageController = {
    getMessagesByRoomId: async (req, res) => {
        const messages = await Message.findAll({
            include: ['user'],
            where: { roomId: req.query.room },
            order: [['createdAt', 'Asc']],
        });

        res.send(messages);
    },
};

export default messageController;