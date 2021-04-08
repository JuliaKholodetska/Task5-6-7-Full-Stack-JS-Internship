import Product from "../models/productModel.js";
import { PRODUCT_POPULATION } from "../constants.js";
import Category from "../models/categoryModel.js";
import pkg from "sequelize";
import { getSum } from "../utils.js";
const { Op } = pkg;

const productController = {
	getProducts: async (req, res) => {
		const { name, category, max, order, rating } = req.query;
		const maxNumber = Number(max);
		const ratingNumber = Number(rating);
		let maxPrice;
		if (maxNumber) {
			maxPrice = maxNumber !== 0 ? maxNumber : 0;
		}
		const ratings = ratingNumber && ratingNumber !== 0 ? ratingNumber : 0;
		const nameFilter = name ? { name: { [Op.iRegexp]: name } } : {};
		const categoryFilter = category
			? { categoryId: await getCategoryIdByName(category) }
			: {};
		const priceFilter = maxPrice ? { price: { [Op.lte]: maxPrice } } : {};
		const ratingFilter = ratings ? { rating: { [Op.gte]: ratings } } : {};
		const sortOrder =
			order === PRODUCT_POPULATION.LOWEST
				? ["price", "ASC"]
				: order === PRODUCT_POPULATION.HIHGEST
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
					order === PRODUCT_POPULATION.TOPRATED ? b.rating - a.rating : 0
				)
		);
	},
	getProductById: async (req, res) => {
		const product = await Product.findByPk(req.params.id, {
			include: ["ratings"],
		});
		if (product) {
			res.send({
				...product.dataValues,
				rating: getRating(product),
			});
		} else {
			res.status(404).send({ message: "Product Not Found" });
		}
	},
	getCategories: async (req, res) => {
		const categories = await Category.findAll();
		res.send(categories.map((category) => category.name));
	},
};

const getCategoryIdByName = async (categoryName) => {
	return (await Category.findOne({ where: { name: categoryName } })).id;
};

const getRating = (product) => {
	const ratings = product.ratings.map((rating) => rating.rating);
	return getSum(ratings);
};

export default productController;
