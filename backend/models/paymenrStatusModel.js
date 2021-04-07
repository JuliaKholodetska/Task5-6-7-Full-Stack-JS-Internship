import sequelizeDB from "../db.js";
import dataTypes from "sequelize";
import Order from "./orderModel.js";

const { DataTypes } = dataTypes;
const PaymentStatus = sequelizeDB.define("paymentStatus", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	paymentStatus: { type: DataTypes.STRING },
});

PaymentStatus.hasMany(Order);
Order.belongsTo(PaymentStatus);

export default PaymentStatus;
