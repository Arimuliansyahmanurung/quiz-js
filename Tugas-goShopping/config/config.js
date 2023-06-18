import dotenv from "dotenv";
dotenv.config();

const config = {
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  db_name: process.env.DB_NAME,
};

export default config;
