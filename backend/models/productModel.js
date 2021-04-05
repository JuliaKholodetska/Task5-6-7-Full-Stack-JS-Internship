import SequelizeDb from "../db.js";
import dataTypes from "sequelize";
import OrderItems from "./orderItemsModel.js";

const { DataTypes } = dataTypes;
const Product = SequelizeDb.define("product", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true },
	price: { type: DataTypes.INTEGER },
	description: { type: DataTypes.STRING },
	countInStock: { type: DataTypes.INTEGER },
	brandId: { type: DataTypes.INTEGER },
	ratingId: { type: DataTypes.INTEGER, defaultValue: 0 },
	img: { type: DataTypes.STRING },
	categoryId: { type: DataTypes.INTEGER },
});

Product.hasMany(OrderItems);
OrderItems.belongsTo(Product);

export default Product;
