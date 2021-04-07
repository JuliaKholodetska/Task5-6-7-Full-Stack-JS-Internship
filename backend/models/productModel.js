import sequelizeDB from "../db.js";
import dataTypes from "sequelize";
import OrderItem from "./orderItemModel.js";

const { DataTypes } = dataTypes;
const Product = sequelizeDB.define("product", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true },
	price: { type: DataTypes.INTEGER },
	description: { type: DataTypes.STRING },
	countInStock: { type: DataTypes.INTEGER },
	brandId: { type: DataTypes.INTEGER },
	ratingId: { type: DataTypes.INTEGER, defaultValue: 0 },
	image: { type: DataTypes.STRING },
	categoryId: { type: DataTypes.INTEGER },
});

Product.hasMany(OrderItem);
OrderItem.belongsTo(Product);

export default Product;
