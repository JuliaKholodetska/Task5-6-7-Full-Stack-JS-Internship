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
const io = new Server(server);
io.on("connect", (socket) => {
	console.log("we have a new connrct");
	socket.on("disconnect", () => {
		console.log("User had left");
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

app.listen(port, () => {
	console.log(`Serve at http://localhost:${port}`);
});

startDB();
