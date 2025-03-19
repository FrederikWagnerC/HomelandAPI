import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';


dotenv.config();

const dbConfig = new Sequelize(
  process.env.DBNAME,
  process.env.DBUSER,
  process.env.DBPASSWD,
  {
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    dialect: 'mysql',
    define: {
      charset: "utf8mb4",
      collate: "utf8mb4_unicode_ci",
    },
  }
);

export default dbConfig