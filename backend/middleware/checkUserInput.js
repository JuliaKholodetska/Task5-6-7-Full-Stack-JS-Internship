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
