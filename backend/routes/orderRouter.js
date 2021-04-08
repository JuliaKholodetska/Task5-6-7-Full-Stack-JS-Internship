import express from "express";
import orderController from "../controllers/orderController.js";
import { ensureAuthenticated } from "../middleware/validator.js";
import asyncHandler from "express-async-handler";

const orderRouter = express.Router();

orderRouter.get(
	"/user/order",
	ensureAuthenticated,
	asyncHandler(orderController.getUserOrder)
);

orderRouter.post(
	"/",
	ensureAuthenticated,
	asyncHandler(orderController.createOrder)
);

orderRouter.get(
	"/:id",
	ensureAuthenticated,
	asyncHandler(orderController.getById)
);

orderRouter.put(
	"/:id/pay",
	ensureAuthenticated,
	asyncHandler(orderController.putPay)
);

export default orderRouter;
