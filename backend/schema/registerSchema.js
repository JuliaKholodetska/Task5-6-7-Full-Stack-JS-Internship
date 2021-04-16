import { body } from "express-validator";

const schema = [
	body("email")
		.notEmpty()
		.withMessage("Email Address required")
		.normalizeEmail()
		.isEmail()
		.withMessage("Must be a valid email"),
	body("password")
		.trim()
		.notEmpty()
		.withMessage("Password required")
		.isLength({ min: 8 })
		.withMessage("Password must be min 8 length")
		.matches(/(?=.*?[A-Z])/)
		.withMessage("At least one Uppercase")
		.matches(/(?=.*?[a-z])/)
		.withMessage("At least one Lowercase")
		.matches(/(?=.*?[0-9])/)
		.withMessage("At least one Number")
		.matches(/(?=.*?[#?!@$%^&*-])/)
		.withMessage("At least one special character")
		.not()
		.matches(/^$|\s+/)
		.withMessage("White space not allowed"),
	body("name")
		.exists({ checkFalsy: true })
		.trim()
		.notEmpty()
		.withMessage("First Name required")
		.matches(/^[a-zA-Z ]*$/)
		.withMessage("Only Characters with white space are allowed"),
];

export { schema as registerSchema };
