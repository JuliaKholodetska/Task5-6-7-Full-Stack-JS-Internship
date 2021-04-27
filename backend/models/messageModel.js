import sequelizeDB from "../sequelize.js";
import dataTypes from "sequelize";
const { DataTypes } = dataTypes;

const Message = sequelizeDB.define("message", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	message: { type: DataTypes.STRING },
	roomId: { type: DataTypes.INTEGER },
	userId: { type: DataTypes.INTEGER },
});

export default Message;
