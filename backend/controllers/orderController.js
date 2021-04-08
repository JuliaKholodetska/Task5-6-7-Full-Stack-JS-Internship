import expressAsyncHandler from "express-async-handler";
import OrderItem from "../models/orderItemModel.js";
import Order from "../models/orderModel.js";

// const orderController = {
// 	createOrder: expressAsyncHandler(async (req, res) => {
// 		const {
// 			orderItem,
// 			shippingAddress,
// 			paymentMethod,
// 			itemsPrice,
// 			shippingPrice,
// 			taxPrice,
// 			totalPrice,
// 		} = req.body;
// 		if (orderItem.length === 0) {
// 			res.status(400).send({ message: "Cart is empty" });
// 		} else {
// 			const order = new Order({
// 				orderItem: orderItem,
// 				shippingAddress: shippingAddress,
// 				paymentMethod: paymentMethod,
// 				itemsPrice: itemsPrice,
// 				shippingPrice: shippingPrice,
// 				taxPrice: taxPrice,
// 				totalPrice: totalPrice,
// 				user: req.user._id,
// 			});
// 			const createdOrder = await order.save();
// 			res
// 				.status(201)
// 				.send({ message: "New Order Created", order: createdOrder });
// 		}
// 	}),
// 	getById: expressAsyncHandler(async (req, res) => {
// 		const order = await Order.findById(req.params.id);
// 		if (order) {
// 			res.send(order);
// 		} else {
// 			res.status(404).send({ message: "Order Not Found" });
// 		}
// 	}),
// 	putByIdPay: expressAsyncHandler(async (req, res) => {
// 		const order = await Order.findById(req.params.id);
// 		const { id, status, update_time, email_address } = req.body;
// 		if (order) {
// 			order.isPaid = true;
// 			order.paidAt = Date.now();
// 			order.paymentResult = {
// 				id: id,
// 				status: status,
// 				update_time: update_time,
// 				email_address: email_address,
// 			};
// 			const updatedOrder = await order.save();
// 			res.send({ message: "Order Paid", order: updatedOrder });
// 		} else {
// 			res.status(404).send({ message: "Order Not Found" });
// 		}
// 	}),
// 	getMineOrder: expressAsyncHandler(async (req, res) => {
// 		const orders = await Order.find({ user: req.user._id });
// 		res.send(orders);
// 	}),
// };
// export default orderController;
