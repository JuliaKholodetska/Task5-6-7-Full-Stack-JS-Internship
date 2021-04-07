import jwt from "jsonwebtoken";

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

export const isAuth = (req, res, next) => {
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

// export const validate = (keysToValidate) => (req, res, next) => {
// 	keysToValidate.forEach(key => {
// 		switch(key) {
// 			case 'password': {
// 				if(req.body.password.length !== 8) {
// 					res.status(400).send({ message: 'Password should be at least 8 symbols long' });
// 				}
// 			}
// 		}
// 	})
// }
