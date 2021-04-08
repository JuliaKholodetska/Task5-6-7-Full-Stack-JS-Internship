import sequelizeDB from "../db.js";
import dataTypes from "sequelize";
import Product from "./productModel.js";
const { DataTypes } = dataTypes;
const Brand = sequelizeDB.define("brand", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING },
});

const Brand = sequelizeDB.define(
	"brand",
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
		name: { type: DataTypes.STRING },
	},
	{ createdAt: false, updatedAt: false, deletedAt: false }
);

Brand.hasMany(Product, { as: "products" });
Product.belongsTo(Brand, {
	foreignKey: "brandId",
	as: "brand",
});

export default Brand;
