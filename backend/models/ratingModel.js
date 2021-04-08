import sequelizeDB from "../db.js";
import dataTypes from "sequelize";
const { DataTypes } = dataTypes;
const Rating = sequelizeDB.define("rating", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	userId: { type: DataTypes.INTEGER },
	productId: { type: DataTypes.INTEGER },
	rating: { type: DataTypes.FLOAT },
});

const Rating = sequelizeDB.define(
	"rating",
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
		userId: { type: DataTypes.INTEGER },
		productId: { type: DataTypes.INTEGER },
		rating: { type: DataTypes.INTEGER },
	},
	{ createdAt: false, updatedAt: false, deletedAt: false }
);

export default Rating;
