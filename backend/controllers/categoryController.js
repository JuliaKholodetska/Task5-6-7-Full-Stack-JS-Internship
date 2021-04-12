import Category from "../models/categoryModel.js";

const categoryController = {
	getCategories: async (req, res) => {
		const categories = await Category.findAll();
		res.send(categories);
	},
};

export default categoryController;
