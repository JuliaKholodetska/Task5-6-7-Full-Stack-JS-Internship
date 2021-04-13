import { body } from "express-validator";

const schema = [
	body("email").isEmail(),
	body("password").isLength({ min: 7 }),
	body("name").exists({ checkFalsy: true }),
];

export { schema as registerSchema };
