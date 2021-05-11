import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const sequelizeDB = new Sequelize({
	database: process.env.DB_NAME,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,

	// connectionString: process.env.DATABASE_URL,
	ssl: true,
	dialect: "postgres",
	сonnectionSsl: true,
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false,
		},
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	logging: false,
});

export default sequelizeDB;
