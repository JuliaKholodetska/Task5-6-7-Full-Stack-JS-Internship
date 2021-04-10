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
					shippingPrice: shippingPrice,
					taxPrice: taxPrice,
					userId: req.user.id,
					fullName: shippingAddress.fullName,
					city: shippingAddress.city,
					postalCode: shippingAddress.postalCode,
				},
				{ include: ["orderItem"] }
			);
			res.status(201).send({
				message: "New Order Created",
				order: formatOrderResponse(order),
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
			res.send(formatOrderResponse(order));
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

const formatOrderResponse = (order) => {
	const itemsPrice = getSum(
		order.orderItem.map(({ price, quantity }) => price * quantity)
	);
	return {
		...order.dataValues,
		itemsPrice,
		taxPrice: order.taxPrice,
		shippingPrice: order.shippingPrice,
		totalPrice: itemsPrice + order.taxPrice + order.shippingPrice,
	};
};

export default orderController;
