import request from "supertest";
import app from "../server.js";

describe("Server connection", () => {
	it("should show message about server connection", async () => {
		const res = await request(app).get("/");
		expect("Server is ready");
	});
});
