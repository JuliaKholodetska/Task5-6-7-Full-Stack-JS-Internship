import express from "express";
//import mongoose from "mongoose";
// import productRouter from "./routers/productRouter.js";
// import userRouter from "./routers/userRouter.js";
// import orderRouter from "./routers/orderRouter.js";
// import User from "./models/userModel.js";
// import Rating from "./models/ratingModel.js";
// import Product from "./models/productModel.js";
// import PaymentStatus from "./models/paymenrStatusModel.js";
// import OrderStatus from "./models/orderStatusModel.js";
// import Order from "./models/orderModel.js";
// import OrderItems from "./models/orderItemsModel.js";
// import Category from "./models/categoryModel.js";
// import Brand from "./models/brandModel.js";
import dotenv from "dotenv";
import SequelizeDb from "./db.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// mongoose.connect(
// 	process.env.MONGODB_URL || "mongodb://localhost/beauty_beach",
// 	{
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 		useCreateIndex: true,
// 	}
// );

// app.use("/api/users", userRouter);
// app.use("/api/products", productRouter);
// app.use("/api/orders", orderRouter);
// app.get("/api/config/paypal", (req, res) => {
// 	res.send(process.env.PAYPAL_CLIENT_ID || "sb");
// });

app.get("/", (req, res) => {
	res.send("Server is ready");
});

app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

const start = async () => {
	try {
		await SequelizeDb.authenticate();
		await SequelizeDb.sync();
		app.listen(port, () => {
			console.log(`Serve at http://localhost:${port}`);
		});
	} catch (e) {}
};
start();
