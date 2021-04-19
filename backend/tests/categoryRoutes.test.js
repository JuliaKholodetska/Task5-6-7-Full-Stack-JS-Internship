import request from "supertest";
import Category from "../models/categoryModel.js";
import app from "../server.js";

describe("Category route", () => {
	it("should show all categories", async () => {
		const data = [
			{ id: 10, name: "category 1" },
			{ id: 11, name: "category 2" },
		];

		jest.spyOn(Category, "findAll").mockReturnValue(data);

		const res = await request(app).get("/api/products/categories");
		expect(res.statusCode).toEqual(200);
		expect(res.body).toMatchObject(data);
	});
});
