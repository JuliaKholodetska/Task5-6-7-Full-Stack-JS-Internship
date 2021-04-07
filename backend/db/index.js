import sequelizeDB from "../sequelize.js";

export const start = async () => {
	await sequelizeDB.authenticate();
	await sequelizeDB.sync();
};
