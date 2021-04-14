import request from "supertest";
import app from "../server.js";

describe("Get category", () => {
	it("should show all category", async () => {
		const res = await request(app).get("/api/products/categories");
		expect(res.statusCode).toEqual(200);
	});
});

describe("Get product", () => {
	it("should show all product", async () => {
		const res = await request(app).get("/api/products");
		expect(res.statusCode).toEqual(200);
		expect(res.body).toStrictEqual([
			{
				id: 48,
				image: "/images/p-10.jpg",
				name: "Inglot Multi-Action Toner",
				price: 95,
				rating: "5",
			},
			{
				id: 47,
				image: "/images/p-9.jpg",
				name: "Inglot Body Sparkles 111",
				price: 80,
				rating: "3",
			},
			{
				id: 46,
				image: "/images/p-8.jpg",
				name: "Inglot Makeup brush 15bjf",
				price: 45,
				rating: "4",
			},
			{
				id: 45,
				image: "/images/p-7.jpg",
				name: "Inglot Secret volume mascara",
				price: 91,
				rating: "3",
			},
			{
				id: 44,
				image: "/images/p-6.jpg",
				name: "Inglot Starlight stick highlighter",
				price: 72,
				rating: "5",
			},
			{
				id: 43,
				image: "/images/p-5.jpg",
				name: "Inglot Cream foundation",
				price: 101,
				rating: "3",
			},
			{
				id: 42,
				image: "/images/p-4.jpg",
				name: "Inglot Mattifying under makeup",
				price: 42,
				rating: "5",
			},
			{
				id: 41,
				image: "/images/p-3.jpg",
				name: "Inglot Mattifying loose powder",
				price: 60,
				rating: "4",
			},
			{
				id: 40,
				image: "/images/p-2.jpg",
				name: "Inglot Sparkler highlighter",
				price: 25,
				rating: "3",
			},
			{
				id: 39,
				image: "/images/p-1.jpg",
				name: "Inglot All covered concealer",
				price: 22,
				rating: "4",
			},
			{
				id: 38,
				image: "/images/p-16.jpg",
				name: "Inglot AMC Multicolor Powder",
				price: 62,
				rating: "5",
			},
			{
				id: 37,
				image: "/images/p-15.jpg",
				name: "Inglot HD Illuminizing  Powder",
				price: 39,
				rating: "4",
			},
			{
				id: 36,
				image: "/images/p-14.jpg",
				name: "Inglot Body Pigment Matte",
				price: 76,
				rating: "4",
			},
			{
				id: 35,
				image: "/images/p-13.jpg",
				name: "Inglot Body Pigment Pearl",
				price: 86,
				rating: "3",
			},
			{
				id: 34,
				image: "/images/p-12.jpg",
				name: "Inglot Sparkling Dust Feb",
				price: 56,
				rating: "5",
			},
			{
				id: 33,
				image: "/images/p-11.jpg",
				name: "Inglot Highlighter Freedon System",
				price: 42,
				rating: "4",
			},
		]);
	});
});

describe("Get product by id", () => {
	it("should show product by id", async () => {
		const res = await request(app).get("/api/products/48").send({ id: 48 });
		expect(res.statusCode).toEqual(200);
		expect(res.body).toStrictEqual({
			id: 48,
			name: "Inglot Multi-Action Toner",
			price: 95,
			description:
				"Add more glow and radiance to your skin with Starlight Stick Highlighter and enjoy it for hours!",
			countInStock: 26,
			brandId: 1,
			image: "/images/p-10.jpg",
			categoryId: 1,
			ratings: [
				{
					id: 26,
					userId: 16,
					productId: 48,
					rating: 5,
				},
			],
			rating: 5,
		});
	});
});

describe("Get all users", () => {
	it("should show all users", async () => {
		const res = await request(app).get("/api/users");
		expect(res.statusCode).toEqual(200);
		expect(res.body).toStrictEqual([
			{
				id: 1,
				name: "Yulicha Kholodetska",
				email: "j.kholodetska@gmail.com",
				password:
					"$2a$08$TfSiurow4aRsM4FuxSuP6eRB5JYyPktENebfhvqhR7tGTJz2eCFse",
				isAdmin: null,
			},
			{
				id: 30,
				name: "Yuliia Kholodetska",
				email: "yuliia.kholodetska.sigma@gmail.com",
				password: "",
				isAdmin: false,
			},
			{
				id: 3,
				name: "Katya Vozna",
				email: "k.vozna@gmail.com",
				password:
					"$2a$08$M.l.y7aYsGMsLlBD..Jk/etUPkcdI13DdcT7idvDrpj3C35aoiWp.",
				isAdmin: null,
			},
			{
				id: 5,
				name: "Sonia Pelenska",
				email: "s.pelenska@gmail.com",
				password:
					"$2a$08$XRp1wMGVo5H0Ccdt9Yber.bMhr14MESsJqHxXhcashnEwoD8PrQKK",
				isAdmin: null,
			},
			{
				id: 6,
				name: "Violetta Bilynska",
				email: "v.bilynska@gmail.com",
				password:
					"$2a$08$vuRzsba9NRyZqekrBGBLoO3OepJYsomohg4FT/enJwznSJs7kKEYm",
				isAdmin: null,
			},
			{
				id: 7,
				name: "Iryna Matseyko",
				email: "i.Matseyko@gmail.com",
				password:
					"$2a$08$WVdJ7O5h9I7IuqCGoxAlAOW53jbPAejA0hRcggL698e56sQOs8B8W",
				isAdmin: null,
			},
			{
				id: 8,
				name: "Anita Korolova",
				email: "a.korolova@gmail.com",
				password:
					"$2a$08$8LZ5zg1Mj.NPLZOKBf.gWeZQZFGVI3UjoVvn.DAHELVX2oELd.R0u",
				isAdmin: null,
			},
			{
				id: 9,
				name: "Anastasia Tortova",
				email: "a.tortova@gmail.com",
				password:
					"$2a$08$/uyEO.G6By0YHpc9CxwnDOP5KHIx2qqfkhiLucYmSEIsDZpjFTYXu",
				isAdmin: null,
			},
			{
				id: 10,
				name: "Zlata Kholodetska",
				email: "z.kholodetska@gmail.com",
				password:
					"$2a$08$EHy3iTyV2enooHw4dwQrOOan492VC4wfu1laIzXHcDLMCDJ4G5LE.",
				isAdmin: null,
			},
			{
				id: 11,
				name: "Sonia Olesckevych",
				email: "s.olesckevych@gmail.com",
				password:
					"$2a$08$q3x6v8FDY3vM1FVIHMmg7OCI2GSwBpGv59cSPZ.Fs3bEoU12xYy46",
				isAdmin: null,
			},
			{
				id: 12,
				name: "Anna Koval",
				email: "a.koval@gmail.com",
				password:
					"$2a$08$aWOfYYALPf/OzhK6gW37M.i2/6.SHhfGv9MJ/CTAompVbUMKQy/4u",
				isAdmin: false,
			},
			{
				id: 13,
				name: "Alina Golo",
				email: "a.golo@gmail.com",
				password:
					"$2a$08$dPeEuJK6wOWbA1pMU/jdY.8QNyRaovvGHGeqJI5yTuM9XkU5HJlM2",
				isAdmin: false,
			},
			{
				id: 14,
				name: "Yana Force",
				email: "y.force@gmail.com",
				password:
					"$2a$08$HCHtV31AHQEA3JkgLfeWs.qmRWVAAfOL6pgKhetR2mu.1ptVqXLzm",
				isAdmin: false,
			},
			{
				id: 15,
				name: "Nastya Love",
				email: "n.love@gmail.com",
				password:
					"$2a$08$FQHXmxJ1opkfsNG9v1umoOec6lYqkNeGjVXL5O6mnYXjCcx6pwqN.",
				isAdmin: false,
			},
			{
				id: 16,
				name: "Zoya Noyn",
				email: "z.noyn@gmail.com",
				password:
					"$2a$08$tTBJjg7FbM7Y9tAp3AAl0eZnSddmk/xsjRcZEiS44W1t4a5/.Ia0G",
				isAdmin: false,
			},
			{
				id: 17,
				name: "Zoryana Mendelyck",
				email: "z.mendelyck@gmail.com",
				password:
					"$2a$08$FIpGJ8w0hgwWBK.gsXOiEuVcPGmBtpftcJ9YRwLGnPazGuYEc17o.",
				isAdmin: false,
			},
			{
				id: 40,
				name: "Tetiana Sas",
				email: "tanya@gmail.com",
				password:
					"$2a$10$wWJscJA35hJgFJyyw8bdpe71udpBLI78drYK9XC3SxLu524xZdcVa",
				isAdmin: false,
			},
			{
				id: 41,
				name: "Sysanna Gry",
				email: "sysa@gmail.com",
				password:
					"$2a$10$urX/Q0z582.uioX0fC871OVwQDeopfpy3s/A6r7shkUfHjOcyWaBK",
				isAdmin: false,
			},
			{
				id: 2,
				name: "Olya Bereznaaz",
				email: "o.berezna@gmail.net",
				password:
					"$2a$08$4Mc1yt5N1iaHgQ9/vODVjuJZEuGKUms65KfySUZvg.yC.hgOYbaLi",
				isAdmin: null,
			},
			{
				id: 4,
				name: "Natalya Ugruniyk",
				email: "n.ugruniyk@gmail.com",
				password:
					"$2a$08$SIF3GBDUfrHamz5I.eGCG.55l84IzIEzXgdQvMp7mugFWJ8V/b4xq",
				isAdmin: null,
			},
		]);
	});
});

describe("Signin user", () => {
	it("should returt user's information if user successful signin", async () => {
		const res = await request(app).post("/api/users/signin").send({
			email: "j.kholodetska@gmail.com",
			password: "1234",
		});
		expect(res.statusCode).toEqual(200);
		expect(res.body).toMatchObject({
			id: 1,
			name: "Yulicha Kholodetska",
			email: "j.kholodetska@gmail.com",
			isAdmin: null,
		});
	});
});

describe("Register user", () => {
	it("should returt user's information if user successful register and 401 if it already exist", async () => {
		const res = await request(app).post("/api/users/register").send({
			name: "Sysanna Gry",
			email: "sysa@gmail.com",
			password: "123456789",
		});
		expect(res.statusCode).toEqual(401);
		expect(res.body).toStrictEqual({ message: "User Already exist" });
	});
});

describe("Get user by id", () => {
	it("should show user by id", async () => {
		const res = await request(app).get("/api/users/17").send({ id: 17 });
		expect(res.statusCode).toEqual(200);
		expect(res.body).toStrictEqual({
			id: 17,
			name: "Zoryana Mendelyck",
			email: "z.mendelyck@gmail.com",
			password: "$2a$08$FIpGJ8w0hgwWBK.gsXOiEuVcPGmBtpftcJ9YRwLGnPazGuYEc17o.",
			isAdmin: false,
		});
	});
});

// describe("Update user profile", () => {
//   it("should show all category ", async () => {
//     jest.spyOn(Category, "findAll").mockResolvedValue([
//       { id: 1, name: "Eyes" },
//       { id: 2, name: "Face" },
//       { id: 3, name: "Body" },
//     ]);
//     const categories = await Category.findAll();
//     expect(categories).toStrictEqual([
//       { id: 1, name: "Eyes" },
//       { id: 2, name: "Face" },
//       { id: 3, name: "Body" },
//     ]);
//   });
// });
