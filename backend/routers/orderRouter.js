import express from "express";
import orderController from "../controllers/orderController.js";
import { isAuth } from "../middleware/utils.js";

const orderRouter = express.Router();

orderRouter.get("/mine", isAuth, orderController.getMineOrder);

orderRouter.post("/", isAuth, orderController.createOrder);

orderRouter.get("/:id", isAuth, orderController.getById);

orderRouter.put("/:id/pay", isAuth, orderController.putByIdPay);

export default orderRouter;
