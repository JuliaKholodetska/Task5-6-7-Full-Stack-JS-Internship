import sequelizeDB from "../sequelize.js";
import dataTypes from "sequelize";
import OrderItem from "./orderItemModel.js";
const { DataTypes } = dataTypes;

const Order = sequelizeDB.define(
	"order",
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
		userId: { type: DataTypes.INTEGER },
		paymentStatusId: { type: DataTypes.INTEGER, allowNull: true },
		paymentMethod: { type: DataTypes.STRING },
		shippingPrice: { type: DataTypes.DECIMAL },
		taxPrice: { type: DataTypes.DECIMAL },
		orderStatusId: { type: DataTypes.INTEGER, allowNull: true },
		fullName: { type: DataTypes.STRING },
		shippingAddress: { type: DataTypes.STRING },
		city: { type: DataTypes.STRING },
		postalCode: { type: DataTypes.INTEGER },
		county: { type: DataTypes.STRING },
	},
	{ createdAt: false, updatedAt: false, deletedAt: false }
);

Order.hasMany(OrderItem, { as: "orderItem" });
OrderItem.belongsTo(Order, {
	foreignKey: "orderId",
	as: "order",
});

export default Order;
