import jwt from "jsonwebtoken";

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

export const validatePassword = (keysToValidate) => (req, res, next) => {
	keysToValidate.forEach((key) => {
		switch (key) {
			case "password": {
				if (req.body.password.length <= 6) {
					return res.status(400).send({
						message:
							"Password should be at least 6 symbols long. Please enter another.",
					});
				}
				next();
			}
		}
	});
};

export const validateEmail = (keysToValidate) => (req, res, next) => {
	keysToValidate.forEach((key) => {
		const reg = /^([A-Za-z0-9_\-.])+@/;
		switch (key) {
			case "email": {
				if (!reg.test(req.body.email) || req.body.email.length <= 10) {
					return res.status(400).send({
						message: "Your email is incorrect, please re-enter it.",
					});
				}
				next();
			}
		}
	});
};
