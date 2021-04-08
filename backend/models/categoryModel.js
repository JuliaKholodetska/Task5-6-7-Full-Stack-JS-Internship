import sequelizeDB from "../db.js";
import dataTypes from "sequelize";
import Product from "./productModel.js";
const { DataTypes } = dataTypes;
const Category = sequelizeDB.define("category", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING },
});

const Category = sequelizeDB.define(
	"category",
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
		name: { type: DataTypes.STRING },
	},
	{ createdAt: false, updatedAt: false, deletedAt: false }
);

Category.hasMany(Product, { as: "products" });
Product.belongsTo(Category, {
	foreignKey: "categoryId",
	as: "category",
});

export default Category;
