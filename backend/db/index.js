import sequelizeDB from "../sequelize.js";

export const startDB = async () => {
	await sequelizeDB.authenticate();
	await sequelizeDB.sync();
};
