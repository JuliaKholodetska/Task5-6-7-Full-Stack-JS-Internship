import express from "express";
import User from "./models/userModel.js";
import Rating from "./models/ratingModel.js";
import Product from "./models/productModel.js";
import PaymentStatus from "./models/paymentStatusModel.js";
import OrderStatus from "./models/orderStatusModel.js";
import Order from "./models/orderModel.js";
import OrderItem from "./models/orderItemModel.js";
import Category from "./models/categoryModel.js";
import Brand from "./models/brandModel.js";
import Message from "./models/messageModel.js";
import dotenv from "dotenv";
import cors from "cors";
import { startDB } from "./db/index.js";
import routes from "./routes/index.js";
import { Server } from "socket.io";
import { createServer } from "http";
import jwt from "jsonwebtoken";
import path from "path";
import ChatService from "./services/chatService.js";
dotenv.config();
const __dirname = path.resolve(path.dirname(""));
const app = express();
app.use(express.static(path.join(__dirname, "client/build")));
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });
const chatService = new ChatService(io);

io.on("connect", (socket) => {
	socket.on("join", ({ token, roomId }, callback) =>
		chatService.joinChat(socket, token, roomId, callback)
	);

	socket.on(
		"sendMessage",
		async ({ message, roomId }, callback) =>
			await chatService.sendMessage(socket.client.id, message, roomId, callback)
	);

	socket.on("disconnect", () => chatService.disconnectChat(socket.client.id));
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
});

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
	console.log(`Serve at http://localhost:${port}`);
});

startDB();
export default app;
