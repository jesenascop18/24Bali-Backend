import { Sequelize } from "sequelize";

const db = new Sequelize("24bali", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
