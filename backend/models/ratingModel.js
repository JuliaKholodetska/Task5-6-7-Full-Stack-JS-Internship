import sequelizeDB from "../sequelize.js";
import dataTypes from "sequelize";
const { DataTypes } = dataTypes;

const Rating = sequelizeDB.define(
	"rating",
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
		userId: { type: DataTypes.INTEGER },
		productId: { type: DataTypes.INTEGER },
		rating: { type: DataTypes.FLOAT },
	},
	{ createdAt: false, updatedAt: false, deletedAt: false }
);

export default Rating;
