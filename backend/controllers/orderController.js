import OrderItem from "../models/orderItemModel.js";
import Order from "../models/orderModel.js";
import { getSum } from "../utils.js";

const orderController = {
	createOrder: async (req, res) => {
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
				order: Create(order, itemsPrice),
			});
		}
	},
	getById: async (req, res) => {
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
			res.send(Create(order, itemsPrice));
		} else {
			res.status(404).send({ message: "Order Not Found" });
		}
	},
	putPay: async (req, res) => {
		const order = await Order.findByPk(id);
		const { id, status, updateTime, emailAddress } = req.body;

		if (!order) {
			res.status(404).send({ message: "Order Not Found" });
		}
		const newOrderData = {
			isPaid: true,
			paidAt: Date.now(),
			paymentResult: {
				id: id,
				status: status,
				updateTime: updateTime,
				emailAddress: emailAddress,
			},
		};
		await Order.update(newOrderData, { where: { id: id } });
		const updatedOrder = await Order.findByPk(id, {
			include: ["orderItem"],
		});
		res.send({ message: "Order Paid", order: updatedOrder });
	},
	getUserOrder: async (req, res) => {
		const orders = await Order.findAll({ user: req.user.id });
		res.send(orders);
	},
};

const Create = (order, itemsPrice) => {
	return {
		...order.dataValues,
		itemsPrice,
		taxPrice: Number(order.taxPrice),
		shippingPrice: Number(order.shippingPrice),
		totalPrice:
			itemsPrice + Number(order.taxPrice) + Number(order.shippingPrice),
	};
};

export default orderController;
