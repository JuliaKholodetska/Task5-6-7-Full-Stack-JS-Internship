import request from "supertest";
import Product from "../models/productModel.js";
import app from "../server.js";

describe("Product route", () => {
	const products = [
		{
			id: 1,
			name: "product 1",
			price: 10,
			countInStock: 100,
			image: "/images/p-9.jpg",
			description: "cool product",
			category: {
				name: "category 1",
			},
			brand: {
				name: "nike",
			},
			total: 3,
		},
		{
			id: 2,
			name: "product 2",
			price: 3,
			countInStock: 200,
			image: "/images/p-9.jpg",
			description: "cool product 2",
			category: {
				name: "category 1",
			},
			brand: {
				name: "adidas",
			},
			total: 5,
		},
		{
			id: 3,
			name: "product 3",
			price: 12,
			countInStock: 500,
			image: "/images/p-9.jpg",
			description: "cool product 3",
			category: {
				name: "category 2",
			},
			brand: {
				name: "nike",
			},
			total: 4,
		},
	];

	const expectedProducts = products.map((product) => ({
		id: product.id,
		name: product.name,
		price: product.price,
		countInStock: product.countInStock,
		image: product.image,
		description: product.description,
		category: product.category.name,
		brand: product.brand.name,
		rating: product.total,
	}));

	it("should return all products", async () => {
		jest.spyOn(Product, "findAll").mockReturnValue(products);
		const res = await request(app).get("/api/products");
		expect(res.statusCode).toEqual(200);
		expect(res.body).toStrictEqual(expectedProducts);
	});

	it("should show product by id", async () => {
		jest.spyOn(Product, "findByPk").mockReturnValue({
			dataValues: expectedProducts[0],
			ratings: [{ rating: expectedProducts[0].rating }],
		});
		const res = await request(app)
			.get(`/api/products/${expectedProducts[0].id}`)
			.send();
		expect(res.statusCode).toEqual(200);
		expect(res.body).toStrictEqual(expectedProducts[0]);
	});
});