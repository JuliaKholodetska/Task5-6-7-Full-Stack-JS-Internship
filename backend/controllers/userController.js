import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import { generateToken } from "../middleware/utils.js";

const userController = {
	getUser: expressAsyncHandler(async (req, res) => {
		const users = await User.findAll();
		res.send(users);
	}),
	signinUser: expressAsyncHandler(async (req, res) => {
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
	}),
	registerUser: expressAsyncHandler(async (req, res) => {
		const { name, email, password } = req.body;
		const userAlreadyExists = await User.findOne({ where: { email } });
		if (!userAlreadyExists) {
			const createdUser = await User.create({
				name: name,
				email: email,
				password: bcrypt.hashSync(password, 8),
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
	}),
	getUserDetailsById: expressAsyncHandler(async (req, res) => {
		const user = await User.findByPk(req.params.id);
		if (user) {
			res.send(user);
		} else {
			res.status(404).send({ message: "User Not Found" });
		}
	}),
	putProfile: expressAsyncHandler(async (req, res) => {
		const user = await User.findByPk(req.user.id);
		const { name, email, password } = req.body;
		if (user) {
			let newUserData = {
				name: name || user.name,
				email: email || user.email,
			};
			if (password) {
				newUserData.password = bcrypt.hashSync(password, 8);
			}
			await User.update(newUserData, { where: { id: req.user.id } });
			const updatedUser = await User.findByPk(req.user.id);
			res.send({
				id: updatedUser.id,
				name: updatedUser.name,
				email: updatedUser.email,
				isAdmin: updatedUser.isAdmin,
				token: generateToken(updatedUser),
			});
		}
	}),
};

export default userController;
