import Product from "../models/productModel.js";
import expressAsyncHandler from "express-async-handler";
import { PRODUCT_POPULATION } from "../constants.js";
import Category from "../models/categoryModel.js";
import pkg from "sequelize";
const { Op } = pkg;

const productController = {
	getProduct: expressAsyncHandler(async (req, res) => {
		const { name, category, max, order, rating } = req.query;
		let maxPrice;
		if (max) {
			maxPrice = +max !== 0 ? +max : 0;
		}
		const ratings = rating && Number(rating) !== 0 ? Number(rating) : 0;
		const nameFilter = name ? { name: { [Op.iRegexp]: name } } : {};
		const categoryFilter = category
			? { categoryId: await getCategoryIdByName(category) }
			: {};
		const priceFilter = maxPrice ? { price: { [Op.lte]: maxPrice } } : {};
		const ratingFilter = ratings ? { rating: { [Op.gte]: ratings } } : {};
		const sortOrder =
			order === PRODUCT_POPULATION.lowest
				? ["price", "ASC"]
				: order === PRODUCT_POPULATION.highest
				? ["price", "DESC"]
				: ["id", "DESC"];
		const products = await Product.findAll({
			include: ["ratings", "category", "brand"],
			where: {
				...nameFilter,
				...categoryFilter,
				...priceFilter,
				...ratingFilter,
			},
			order: [sortOrder],
		});
		res.send(
			products
				.map((product) => {
					return {
						...product.dataValues,
						category: product.category.name,
						brand: product.brand.name,
						rating: getRating(product),
					};
				})
				.sort((a, b) =>
					order === PRODUCT_POPULATION.toprated ? b.rating - a.rating : 0
				)
		);
	}),
	getProductById: expressAsyncHandler(async (req, res) => {
		const product = await Product.findByPk(req.params.id, {
			include: ["ratings", "category", "brand"],
		});
		if (product) {
			res.send({
				...product.dataValues,
				category: product.category.name,
				brand: product.brand.name,
				rating: getRating(product),
			});
		} else {
			res.status(404).send({ message: "Product Not Found" });
		}
	}),
	getCategories: expressAsyncHandler(async (req, res) => {
		const categories = await Category.findAll();
		res.send(categories.map((category) => category.name));
	}),
};

const getCategoryIdByName = async (categoryName) => {
	return (await Category.findOne({ where: { name: categoryName } })).id || 0;
};

const getRating = (product) => {
	const ratings = product.ratings.map((rating) => rating.rating);
	return ratings.reduce((a, b) => {
		return a + b;
	}, 0);
};

export default productController;
