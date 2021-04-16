import Product from "../models/productModel.js";
import {
	countOfProduct,
	numberOfProductOnPage,
	PRODUCT_POPULATION,
} from "../constants.js";
import Category from "../models/categoryModel.js";
import pkg from "sequelize";
import { getSum } from "../utils.js";
import { Sequelize } from "sequelize";
const { Op } = pkg;
const productController = {
	getProducts: async (req, res) => {
		const { name, category, max, order, rating, pageNumber } = req.query;
		let maxPrice;
		const page = Number(pageNumber) || 1;
		if (Number(max)) {
			maxPrice = Number(max) !== 0 ? Number(max) : 0;
		}
		const ratings = Number(rating) && Number(rating) !== 0 ? Number(rating) : 0;
		const nameFilter = name ? { name: { [Op.iRegexp]: name } } : {};
		let categoryFilter;
		if (category !== "all") {
			categoryFilter = { categoryId: category };
		}
		const priceFilter = maxPrice ? { price: { [Op.lte]: maxPrice } } : {};
		const ratingFilter = ratings ? { rating: { [Op.gte]: ratings } } : {};
		const sortOrder =
			order === PRODUCT_POPULATION.TOPRATED
				? [Sequelize.literal("total DESC")]
				: order === PRODUCT_POPULATION.LOWEST
				? ["price", "ASC"]
				: order === PRODUCT_POPULATION.HIHGEST
				? ["price", "DESC"]
				: ["id", "DESC"];

		const productsFind = await Product.findAll({
			include: ["ratings", "category", "brand"],
			attributes: [
				"product.id",
				"product.name",
				"product.price",
				"product.brandId",
				"product.image",
				"product.categoryId",
				[Sequelize.fn("sum", Sequelize.col("ratings.rating")), "total"],
			],
			group: [
				"product.id",
				"product.name",
				"product.price",
				"product.brandId",
				"product.image",
				"product.categoryId",
				"ratings.id",
				"category.id",
				"brand.id",
			],
			raw: true,
			where: {
				...nameFilter,
				...categoryFilter,
				...priceFilter,
				...ratingFilter,
			},
			offset: numberOfProductOnPage * (page - 1),
			limit: numberOfProductOnPage,
			subQuery: false,
			order: [sortOrder],
		});
		const products = productsFind.map((product) => {
			return {
				id: product.id,
				name: product.name,
				price: product.price,
				countInStock: product.countInStock,
				image: product.image,
				description: product.description,
				category: product?.category?.name,
				brand: product?.brand?.name,
				rating: product.total,
			};
		});
		res.send({
			products,
			page,
			pages: Math.ceil(countOfProduct / numberOfProductOnPage),
		});
	},
	getProductById: async (req, res) => {
		const product = await Product.findByPk(req.params.id, {
			include: ["ratings"],
		});
		if (!product) {
			res.status(404).send({ message: "Product Not Found" });
		} else {
			res.send({
				...product.dataValues,
				rating: getRating(product),
			});
		}
	},
	getCategories: async (req, res) => {
		const categories = await Category.findAll();
		res.send(categories.map((category) => category.name));
	},
};

const getRating = (product) => {
	const ratings = product.ratings.map((rating) => rating.rating);
	const avgRatings = getSum(ratings) / ratings.length;
	return avgRatings;
};

export default productController;
