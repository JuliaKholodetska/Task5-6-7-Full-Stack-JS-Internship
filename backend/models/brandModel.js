import sequelizeDB from "../db.js";
import dataTypes from "sequelize";
import Product from "./productModel.js";

const { DataTypes } = dataTypes;
const Brand = sequelizeDB.define("brand", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING },
});

Brand.hasMany(Product);
Product.belongsTo(Brand);

export default Brand;