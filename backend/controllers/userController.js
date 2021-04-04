import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import { generateToken } from "../utils.js";

const userController = {
	getUser: expressAsyncHandler(async (req, res) => {
		const users = await User.find({});
		res.send(users);
	}),
	signinUser: expressAsyncHandler(async (req, res) => {
		const { email, password } = req.body;
		const user = await User.findOne({ email: email });
		if (user) {
			if (bcrypt.compareSync(password, user.password)) {
				res.send({
					_id: user._id,
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
		const user = new User({
			name: name,
			email: email,
			password: bcrypt.hashSync(password, 8),
		});
		const userPosible = await User.findOne({ email: email });
		if (!userPosible) {
			const createdUser = await user.save();
			res.send({
				_id: createdUser._id,
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
		const user = await User.findById(req.params.id);
		if (user) {
			res.send(user);
		} else {
			res.status(404).send({ message: "User Not Found" });
		}
	}),
	putProfile: expressAsyncHandler(async (req, res) => {
		const user = await User.findById(req.user._id);
		const { name, email, password } = req.body;
		if (user) {
			user.name = name || user.name;
			user.email = email || user.email;
			if (password) {
				user.password = bcrypt.hashSync(password, 8);
			}
			const updatedUser = await user.save();
			res.send({
				_id: updatedUser._id,
				name: updatedUser.name,
				email: updatedUser.email,
				isAdmin: updatedUser.isAdmin,
				token: generateToken(updatedUser),
			});
		}
	}),
};
export default userController;
