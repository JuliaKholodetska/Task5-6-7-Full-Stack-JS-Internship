import express from "express";
import orderRouter from "./orderRouter.js";
import productRouter from "./productRouter.js";
import userRouter from "./userRouter.js";
const routes = express.Router();

routes.use("/api/users", userRouter);

routes.use("/api/products", productRouter);

routes.use("/api/orders", orderRouter);

routes.get("/api/config/paypal", (req, res) => {
	res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

routes.get("/", (req, res) => {
	res.send("Server is ready");
});
export default routes;
