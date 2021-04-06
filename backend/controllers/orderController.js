import expressAsyncHandler from "express-async-handler";
import OrderItem from "../models/orderItemModel.js";
import Order from "../models/orderModel.js";

const orderController = {
	createOrder: expressAsyncHandler(async (req, res) => {
		const {
			orderItem,
			shippingAddress,
			paymentMethod,
			shippingPrice,
			taxPrice,
		} = req.body;
		if (orderItem.length === 0) {
			res.status(400).send({ message: "Cart is empty" });
		} else {
			const order = await Order.create(
				{
					orderItem: orderItem,
					shippingAddress: shippingAddress.address,
					paymentMethod: paymentMethod,
					shippingPrice: Number(shippingPrice),
					taxPrice: Number(taxPrice),
					userId: req.user.id,
					fullName: shippingAddress.fullName,
					city: shippingAddress.city,
					postalCode: shippingAddress.postalCode,
				},
				{ include: ["orderItem"] }
			);
			const itemsPrice = getSum(
				order.orderItem.map(({ price, quantity }) => price * quantity)
			);
			res.status(201).send({
				message: "New Order Created",
				order: {
					...order.dataValues,
					itemsPrice,
					taxPrice: Number(order.taxPrice),
					shippingPrice: Number(order.shippingPrice),
					totalPrice:
						itemsPrice + Number(order.taxPrice) + Number(order.shippingPrice),
				},
			});
		}
	}),
	getById: expressAsyncHandler(async (req, res) => {
		const order = await Order.findByPk(req.params.id, {
			include: [
				{
					model: OrderItem,
					as: "orderItem",
					include: ["product"],
				},
			],
		});
		if (order) {
			const itemsPrice = getSum(
				order.orderItem.map(({ price, quantity }) => price * quantity)
			);

			res.send({
				...order.dataValues,
				itemsPrice,
				taxPrice: Number(order.taxPrice),
				shippingPrice: Number(order.shippingPrice),
				totalPrice:
					itemsPrice + Number(order.taxPrice) + Number(order.shippingPrice),
			});
		} else {
			res.status(404).send({ message: "Order Not Found" });
		}
	}),
	putByIdPay: expressAsyncHandler(async (req, res) => {
		const order = await Order.findByPk(req.params.id);
		const { id, status, update_time, email_address } = req.body;
		if (order) {
			const newOrderData = {
				isPaid: true,
				paidAt: Date.now(),
				paymentResult: {
					id: id,
					status: status,
					update_time: update_time,
					email_address: email_address,
				},
			};
			await Order.update(newOrderData, { where: { id: req.params.id } });
			const updatedOrder = await Order.findByPk(req.params.id, {
				include: ["orderItem"],
			});
			res.send({ message: "Order Paid", order: updatedOrder });
		} else {
			res.status(404).send({ message: "Order Not Found" });
		}
	}),
	getMineOrder: expressAsyncHandler(async (req, res) => {
		const orders = await Order.findAll({ user: req.user.id });
		res.send(orders);
	}),
};

const getSum = (arr) => arr.reduce((a, b) => a + b, 0);

export default orderController;
