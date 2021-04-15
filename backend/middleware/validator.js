import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

export const ensureAuthenticated = (req, res, next) => {
	const authorization = req.headers.authorization;
	if (authorization) {
		const token = authorization.slice(7, authorization.length);
		jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
			if (err) {
				res.status(401).send({ message: "Invalid Token" });
			} else {
				req.user = decode;
				next();
			}
		});
	} else {
		res.status(401).send({ message: "No Token" });
	}
};

export const validatRequestSchema = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res
			.status(400)
			.send({
				message:
					"Password must be at least 7 chars long and must contain a number. Check email correct.",
			});
	}
	next();
};
