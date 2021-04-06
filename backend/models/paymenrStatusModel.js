import sequelizeDB from "../sequelize.js";
import dataTypes from "sequelize";
import Order from "./orderModel.js";
const { DataTypes } = dataTypes;

const PaymentStatus = sequelizeDB.define(
	"paymentStatus",
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
		paymentStatus: { type: DataTypes.STRING },
	},
	{ createdAt: false, updatedAt: false, deletedAt: false }
);

PaymentStatus.hasMany(Order);
Order.belongsTo(PaymentStatus);

export default PaymentStatus;
