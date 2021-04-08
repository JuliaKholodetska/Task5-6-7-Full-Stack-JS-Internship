<<<<<<< HEAD
import sequelizeDB from "../sequelize.js";
=======
import sequelizeDB from "../db.js";
>>>>>>> 67cf5b1ab21fbb3e1422ddc45631ea8260a395e0
import dataTypes from "sequelize";
import Order from "./orderModel.js";
import Rating from "./ratingModel.js";
const { DataTypes } = dataTypes;
const User = sequelizeDB.define("user", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true },
	email: { type: DataTypes.STRING, unique: true },
	password: { type: DataTypes.STRING, unique: false },
	isAdmin: { type: DataTypes.BOOLEAN, default: false },
});

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

export default User;
