import bcrypt from "bcryptjs";
import { OAuth2Client } from "google-auth-library";
import User from "../models/userModel.js";
import { generateToken } from "../utils.js";
import dotenv from "dotenv";
dotenv.config();

const userController = {
	getUsers: async (req, res) => {
		const users = await User.findAll();
		res.send(users);
	},
	signinUser: async (req, res) => {
		const { email, password } = req.body;
		const user = await User.findOne({ where: { email } });
		if (user) {
			if (bcrypt.compareSync(password, user.password)) {
				res.send({
					id: user.id,
					name: user.name,
					email: user.email,
					isAdmin: user.isAdmin,
					token: generateToken(user),
				});
				return;
			}
		}
		res.status(401).send({ message: "Invalid email or password" });
	},
	registerUser: async (req, res) => {
		const { name, email, password } = req.body;
		const userAlreadyExists = await User.findOne({ where: { email } });
		if (!userAlreadyExists) {
			const createdUser = await User.create({
				name: name,
				email: email,
				password: bcrypt.hashSync(password),
			});
			res.send({
				id: createdUser.id,
				name: createdUser.name,
				email: createdUser.email,
				isAdmin: createdUser.isAdmin,
				token: generateToken(createdUser),
			});
		} else {
			res.status(401).send({ message: "User Already exist" });
		}
	},
	getUser: async (req, res) => {
		const user = await User.findByPk(req.params.id);
		if (!user) {
			res.status(404).send({ message: "User Not Found" });
		}
		res.send(user);
	},
	updateProfile: async (req, res) => {
		const { name, email, password } = req.body;
		const reqUserId = req.user.id;
		const user = await User.findByPk(reqUserId);
		if (user) {
			let updatedUserData = {
				name: name || user.name,
				email: email || user.email,
			};
			if (password) {
				updatedUserData.password = bcrypt.hashSync(password, 8);
			}
			const result = await User.update(updatedUserData, {
				where: { id: reqUserId },
				returning: true,
			});
			if (!result) {
				res.status(404).send({ message: "Something went wrong, try again." });
			} else {
				const updatedUser = result[1][0].dataValues;
				res.send({
					id: updatedUser.id,
					name: updatedUser.name,
					email: updatedUser.email,
					isAdmin: updatedUser.isAdmin,
					token: generateToken(updatedUser),
				});
			}
		}
	},
	checkGoogleUser: async (req, res) => {
		const client = new OAuth2Client();
		const ticket = await client.verifyIdToken({
			idToken: req.body.tokenId,
			audience: process.env.REACT_APP_GOOGLE_CLIENT_ID,
		});
		const dataUser = ticket.getPayload();

		let user = null;
		const findUser = await User.findOne({ where: { email: dataUser.email } });
		if (!findUser) {
			user = await registerGoogleUser({
				name: dataUser.name,
				email: dataUser.email,
			});
		}
		user = await loginGoogleUser({
			email: dataUser.email,
		});

		res.send(user);
	},
};

const loginGoogleUser = async ({ email }) => {
	const user = await User.findOne({ where: { email } });
	if (!user) {
		throw new Error("Wrong credentials");
	}

	return {
		...user.dataValues,
		id: user.id,
		token: generateToken(user),
	};
};
const registerGoogleUser = async ({ name, email }) => {
	const user = await User.create({
		password: "",
		isAdmin: false,
		name,
		email,
	});

	return {
		...user.dataValues,
		id: user.id,
		token: generateToken(user),
	};
};

export default userController;
