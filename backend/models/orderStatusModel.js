import sequelizeDB from "../sequelize.js";
import dataTypes from "sequelize";
import Order from "./orderModel.js";
const { DataTypes } = dataTypes;

const OrderStatus = sequelizeDB.define(
	"orderStatus",
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
		orderStatus: { type: DataTypes.STRING },
	},
	{ createdAt: false, updatedAt: false, deletedAt: false }
);

OrderStatus.hasMany(Order);
Order.belongsTo(OrderStatus);

export default OrderStatus;
