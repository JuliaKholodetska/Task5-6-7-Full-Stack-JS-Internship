import express from "express";
import categoryController from "../controllers/categoryController.js";
import productController from "../controllers/productController.js";
import asyncHandler from "express-async-handler";
const productRouter = express.Router();

productRouter.get("/", asyncHandler(productController.getProducts));

productRouter.get(
	"/categories",
	asyncHandler(categoryController.getCategories)
);

productRouter.get("/:id", asyncHandler(productController.getProductById));

export default productRouter;
