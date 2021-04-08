import sequelizeDB from "../db.js";
import dataTypes from "sequelize";
import OrderItem from "./orderItemModel.js";

const { DataTypes } = dataTypes;
const Order = sequelizeDB.define("order", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	userId: { type: DataTypes.INTEGER },
	paymentStatusId: { type: DataTypes.INTEGER },
	paymentMethod: { type: DataTypes.STRING },
	shippingPrice: { type: DataTypes.INTEGER },
	taxPrice: { type: DataTypes.INTEGER },
	orderStatusId: { type: DataTypes.INTEGER },
	fullName: { type: DataTypes.STRING },
	shippingAddress: { type: DataTypes.STRING },
	city: { type: DataTypes.STRING },
	postalCode: { type: DataTypes.INTEGER },
	county: { type: DataTypes.STRING },
});

Order.hasMany(OrderItem);
OrderItem.belongsTo(Order);

export default Order;
