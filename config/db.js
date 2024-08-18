import { Sequelize } from "sequelize";

export const dbConnection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "mariadb",
    }
);
