import sequelizeDB from "../sequelize.js";
import dataTypes from "sequelize";
import OrderItem from "./orderItemModel.js";
import Rating from "./ratingModel.js";
const { DataTypes } = dataTypes;

const Product = sequelizeDB.define(
	"product",
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
		name: { type: DataTypes.STRING, unique: true },
		price: { type: DataTypes.INTEGER },
		description: { type: DataTypes.STRING },
		countInStock: { type: DataTypes.INTEGER },
		brandId: { type: DataTypes.INTEGER },
		image: { type: DataTypes.STRING },
		categoryId: { type: DataTypes.INTEGER },
	},
	{ createdAt: false, updatedAt: false, deletedAt: false }
);

Product.hasMany(OrderItem, { as: "orderItem" });
OrderItem.belongsTo(Product, {
	foreignKey: "productId",
	as: "product",
});

Product.hasMany(Rating, { as: "ratings" });
Rating.belongsTo(Product, { foreignKey: "productId", as: "product" });

export default Product;
