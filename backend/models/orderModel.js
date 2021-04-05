import SequelizeDb from "../db.js";
import dataTypes from "sequelize";
import OrderItems from "./orderItemsModel.js";

const { DataTypes } = dataTypes;
const Order = SequelizeDb.define("order", {
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

Order.hasMany(OrderItems);
OrderItems.belongsTo(Order);

export default Order;
