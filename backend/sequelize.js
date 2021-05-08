import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const sequelizeDB = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		ssl: true,
		dialect: "postgres",
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false,
			},
		},
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		logging: false,
	}
);

export default sequelizeDB;
