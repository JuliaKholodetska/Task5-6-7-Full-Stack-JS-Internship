import sequelizeDB from "../sequelize.js";
import dataTypes from "sequelize";

const { DataTypes } = dataTypes;
const OrderItem = sequelizeDB.define("orderItem", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	orderId: { type: DataTypes.INTEGER },
	productId: { type: DataTypes.INTEGER },
	quantity: { type: DataTypes.INTEGER },
	price: { type: DataTypes.INTEGER },
});

export default OrderItem;
