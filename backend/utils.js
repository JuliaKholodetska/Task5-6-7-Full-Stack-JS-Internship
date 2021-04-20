import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const generateToken = (user) => {
	return jwt.sign(
		{
			id: user.id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
		},
		process.env.JWT_SECRET,
		{
			expiresIn: "30d",
		}
	);
};

export const getSum = (arr) => arr.reduce((a, b) => a + b, 0);
