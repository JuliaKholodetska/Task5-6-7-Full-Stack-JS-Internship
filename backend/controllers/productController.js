import Product from "../models/productModel.js";
import { lIMIT_PRODUCTS, PRODUCT_POPULATION } from "../constants.js";
import pkg from "sequelize";
import { getSum } from "../utils.js";
import { Sequelize } from "sequelize";
const { Op } = pkg;

const productController = {
	getProducts: async (req, res) => {
		const { name, category, max, order, rating, pageNumber } = req.query;
		const page = Number(pageNumber) || 1;
		const maxPrice = Number(max);
		const ratings = Number(rating) && Number(rating) !== 0 ? Number(rating) : 0;
		const nameFilter = name ? { name: { [Op.iRegexp]: name } } : {};
		let categoryFilter;
		if (category !== "all") {
			categoryFilter = { categoryId: category };
		}
		const priceFilter = maxPrice ? { price: { [Op.lte]: maxPrice } } : {};
		const ratingFilter = ratings ? { total: { [Op.gte]: ratings } } : {};
		const sortOrder =
			order === PRODUCT_POPULATION.TOPRATED
				? [Sequelize.literal("total DESC")]
				: order === PRODUCT_POPULATION.LOWEST
				? ["price", "ASC"]
				: order === PRODUCT_POPULATION.HIHGEST
				? ["price", "DESC"]
				: ["id", "DESC"];

		const productsFind = await Product.findAndCountAll({
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
			offset: lIMIT_PRODUCTS * (page - 1),
			limit: lIMIT_PRODUCTS,
			subQuery: false,
			order: [sortOrder],
		});
		const productArray = productsFind.rows;
		const countOfProducts = productsFind.count.length;
		const products = productArray.map((product) => {
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
			totalPages: Math.ceil(countOfProducts / lIMIT_PRODUCTS),
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
	test: async (req, res) => {
		// const { name, category, max, order, rating, pageNumber } = req.query;
		// const countOfProducts = await Product.count();
		// const page = Number(pageNumber) || 1;
		// const maxPrice = Number(max);
		// const ratings = Number(rating) && Number(rating) !== 0 ? Number(rating) : 0;
		// const nameFilter = name ? { name: { [Op.iRegexp]: name } } : {};
		// let categoryFilter;
		// if (category !== "all") {
		// 	categoryFilter = { categoryId: category };
		// }
		// const priceFilter = maxPrice ? { price: { [Op.lte]: maxPrice } } : {};
		// const ratingFilter = ratings ? { total: { [Op.gte]: ratings } } : {};
		// const sortOrder =
		// 	order === PRODUCT_POPULATION.TOPRATED
		// 		? [Sequelize.literal("total DESC")]
		// 		: order === PRODUCT_POPULATION.LOWEST
		// 		? ["price", "ASC"]
		// 		: order === PRODUCT_POPULATION.HIHGEST
		// 		? ["price", "DESC"]
		// 		: ["id", "DESC"];

		const productsFind = await Product.findAndCountAll({
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
			// where: {
			// 	...nameFilter,
			// 	...categoryFilter,
			// 	...priceFilter,
			// 	...ratingFilter,
			// },
			// offset: lIMIT_PRODUCTS * (page - 1),
			// limit: lIMIT_PRODUCTS,
			// subQuery: false,
			// order: [sortOrder],
		});
		const productArray = productsFind.rows;
		const countOfProducts = productsFind.count.length;
		const products = productArray.map((product) => {
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
			totalPages: Math.ceil(countOfProducts / lIMIT_PRODUCTS),
		});
	},
};

const getRating = (product) => {
	const ratings = product.ratings.map((rating) => rating.rating);
	const avgRatings = getSum(ratings) / ratings.length;
	return avgRatings;
};

export default productController;
