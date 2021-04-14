import request from "supertest";
import Category from "../models/categoryModel.js";
import Product from "../models/productModel.js";
import User from "../models/userModel.js";
import app from "../server.js";
import { generateToken } from "../utils.js";
import bcrypt from "bcryptjs";

describe("Category route", () => {
	it("should show all categories", async () => {
		const data = [
			{ id: 10, name: "test 1" },
			{ id: 11, name: "test 2" },
		];

		jest.spyOn(Category, "findAll").mockReturnValue(data);

		const res = await request(app).get("/api/products/categories");
		expect(res.statusCode).toEqual(200);
		expect(res.body).toMatchObject(data);
	});
});

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
				name: "test 1",
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
				name: "test 1",
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
				name: "test 2",
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

	it("should show all products", async () => {
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

describe("User route", () => {
	it("should update user profile", async () => {
		const user = {
			id: 1,
			name: "Julia",
			email: "julia@test.com",
			password: "randomHash",
			isAdmin: false,
		};

		const updatedUser = {
			id: 1,
			name: "Julia Khlodetska",
			email: "julia@test.com",
			isAdmin: false,
		};

		jest.spyOn(User, "findByPk").mockReturnValue(user);
		jest
			.spyOn(User, "update")
			.mockReturnValue([null, [{ dataValues: updatedUser }]]);

		const userToken = generateToken(user);

		const res = await request(app)
			.put("/api/users/profile")
			.set("Authorization", `Bearer ${userToken}`)
			.send({ name: updatedUser.name });

		const { token, ...newUser } = res.body;
		expect(res.statusCode).toEqual(200);
		expect(token).toBeDefined();
		expect(newUser).toStrictEqual(updatedUser);
	});
	it("should return user's information if user successful signed in", async () => {
		const password = "password";
		const user = {
			id: 1,
			name: "Julia",
			email: "julia@test.com",
			isAdmin: false,
		};

		jest
			.spyOn(User, "findOne")
			.mockReturnValue({ ...user, password: bcrypt.hashSync(password) });

		const res = await request(app).post("/api/users/signin").send({
			email: "julia@test.com",
			password: password,
		});

		const { token, ...userData } = res.body;

		expect(res.statusCode).toEqual(200);
		expect(token).toBeDefined();
		expect(userData).toStrictEqual(user);
	});

	it("should return user's information if user successful registered", async () => {
		const user = {
			name: "Julia",
			email: "julia@test.com",
		};

		const id = 1;
		const password = "password";

		jest.spyOn(User, "findOne").mockReturnValue(null);
		jest.spyOn(User, "create").mockReturnValue({ ...user, id });

		const res = await request(app)
			.post("/api/users/register")
			.send({ ...user, password });

		const { token, ...userData } = res.body;

		expect(res.statusCode).toEqual(200);
		expect(token).toBeDefined();
		expect(userData).toStrictEqual({ ...user, id });
	});

	it("should return user by id", async () => {
		const id = 1;
		const user = {
			id,
			name: "Julia",
			email: "julia@test.com",
			password: "randomHash",
			isAdmin: false,
		};

		jest.spyOn(User, "findByPk").mockReturnValue(user);

		const res = await request(app).get(`/api/users/${id}`).send();
		expect(res.statusCode).toEqual(200);
		expect(res.body).toStrictEqual(user);
	});

	it("should return all users", async () => {
		const users = [
			{
				id: 1,
				name: "Julia",
				email: "julia@test.com",
				password: "randomHash",
				isAdmin: false,
			},
			{
				id: 2,
				name: "Max",
				email: "max@test.com",
				password: "randomHash",
				isAdmin: true,
			},
			{
				id: 3,
				name: "Bill",
				email: "bill@test.com",
				password: "randomHash",
				isAdmin: false,
			},
		];

		jest.spyOn(User, "findAll").mockReturnValue(users);

		const res = await request(app).get("/api/users");
		expect(res.statusCode).toEqual(200);
		expect(res.body).toStrictEqual(users);
	});
});
