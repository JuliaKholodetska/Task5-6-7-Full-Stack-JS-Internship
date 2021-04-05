import SequelizeDb from "../db.js";
import dataTypes from "sequelize";
import Product from "./productModel.js";

const { DataTypes } = dataTypes;
const Category = SequelizeDb.define("category", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING },
});

Category.hasMany(Product);
Product.belongsTo(Category);

export default Category;
