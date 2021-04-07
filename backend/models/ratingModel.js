import sequelizeDB from "../db.js";
import dataTypes from "sequelize";
import Product from "./productModel.js";

const { DataTypes } = dataTypes;
const Rating = sequelizeDB.define("rating", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	userId: { type: DataTypes.INTEGER },
	rating: { type: DataTypes.FLOAT },
});

Rating.hasMany(Product);
Product.belongsTo(Rating);

export default Rating;
