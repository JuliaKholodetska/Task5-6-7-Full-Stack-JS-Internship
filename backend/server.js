import express from "express";
import User from "./models/userModel.js";
import Rating from "./models/ratingModel.js";
import Product from "./models/productModel.js";
import PaymentStatus from "./models/paymenrStatusModel.js";
import OrderStatus from "./models/orderStatusModel.js";
import Order from "./models/orderModel.js";
import OrderItem from "./models/OrderItemModel.js";
import Category from "./models/categoryModel.js";
import Brand from "./models/brandModel.js";
import dotenv from "dotenv";
import cors from "cors";
import { startDB } from "./db/index.js";
import routes from "./routes/index.js";
import { Server } from "socket.io";
import { createServer } from "http";
dotenv.config();
const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });
const users = [];

const addUser = ({ id, name, room }) => {
	name = name.trim().toLowerCase();
	room = room.trim().toLowerCase();

	const existingUser = users.find(
		(user) => user.room === room && user.name === name
	);

	if (!name || !room) return { error: "Username and room are required." };
	if (existingUser) return { error: "Username is taken." };

	const user = { id, name, room };

	users.push(user);

	return { user };
};

const removeUser = (id) => {
	const index = users.findIndex((user) => user.id === id);

	if (index !== -1) return users.splice(index, 1)[0];
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);
io.on("connect", (socket) => {
	socket.on("join", ({ name, room }, callback) => {
		const { error, user } = addUser({ id: socket.id, name, room });

		if (error) return callback(error);

		socket.join(user.room);

		socket.emit("message", {
			user: "admin",
			text: `${user.name}, welcome to room ${user.room}.`,
		});
		socket.broadcast
			.to(user.room)
			.emit("message", { user: "admin", text: `${user.name} has joined!` });

		io.to(user.room).emit("roomData", {
			room: user.room,
			users: getUsersInRoom(user.room),
		});

		callback();
	});

	socket.on("sendMessage", (message, callback) => {
		const user = getUser(socket.id);

		io.to(user.room).emit("message", { user: user.name, text: message });

		callback();
	});

	socket.on("disconnect", () => {
		const user = removeUser(socket.id);

		if (user) {
			io.to(user.room).emit("message", {
				user: "Admin",
				text: `${user.name} has left.`,
			});
			io.to(user.room).emit("roomData", {
				room: user.room,
				users: getUsersInRoom(user.room),
			});
		}
	});
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
	console.log(`Serve at http://localhost:${port}`);
});

startDB();
