import SequelizeDb from "../db.js";
import dataTypes from "sequelize";
import Product from "./productModel.js";

const { DataTypes } = dataTypes;
const Rating = SequelizeDb.define("rating", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	userId: { type: DataTypes.INTEGER },
	rating: { type: DataTypes.INTEGER },
});

Rating.hasMany(Product);
Product.belongsTo(Rating);

export default Rating;
