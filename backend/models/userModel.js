import sequelizeDB from "../sequelize.js";
import dataTypes from "sequelize";
import Order from "./orderModel.js";
import Rating from "./ratingModel.js";
import Message from "./messageModel.js";
const { DataTypes } = dataTypes;

const User = sequelizeDB.define(
	"user",
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
		name: { type: DataTypes.STRING, unique: true },
		email: { type: DataTypes.STRING, unique: true },
		password: { type: DataTypes.STRING, unique: false },
		isAdmin: { type: DataTypes.BOOLEAN, defaultValue: false },
	},
	{ createdAt: false, updatedAt: false, deletedAt: false }
);

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(Message);
Message.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

export default User;
