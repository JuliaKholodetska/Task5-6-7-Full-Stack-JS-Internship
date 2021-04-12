import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import { generateToken } from "../utils.js";
import { OAuth2Client } from "google-auth-library";
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
	googleUser: async (idToken, staySignedIn) => {
		const client = new OAuth2Client();
		const ticket = await client.verifyIdToken({
			idToken,
			audience: process.env.REACT_APP_GOOGLE_CLIENT_ID,
		});
		const dataUser = ticket.getPayload();
		const userid = dataUser.sub;
		if (!(await User.findOne({ where: { email: dataUser.email } }).exec())) {
			await this.registerGoogleUser({
				firstName: dataUser.given_name,
				lastName: dataUser.family_name,
				email: dataUser.email,
				credentials: [
					{
						source: GOOGLE,
						tokenPass: userid,
					},
				],
			});
		}
		return this.loginGoogleUser({
			email: dataUser.email,
			staySignedIn,
		});
	},
};

const loginGoogleUser = async ({ email, staySignedIn }) => {
	const user = await User.findOne({ email }).exec();
	if (!user) {
		throw new UserInputError(WRONG_CREDENTIALS, { statusCode: BAD_REQUEST });
	}

	const { accesToken, refreshToken } = generateTokens(
		user._id,
		{
			expiresIn: TOKEN_EXPIRES_IN,
			secret: SECRET,
		},
		staySignedIn
	);

	return {
		...user._doc,
		_id: user._id,
		token: accesToken,
		refreshToken,
	};
};
const registerGoogleUser = async ({
	firstName,
	lastName,
	email,
	credentials,
}) => {
	if (await User.findOne({ email }).exec()) {
		throw new UserInputError(USER_ALREADY_EXIST, { statusCode: BAD_REQUEST });
	}

	const user = new User({
		firstName,
		lastName,
		email,
		credentials,
	});
	const savedUser = await user.save();

	return savedUser;
};

export default userController;
