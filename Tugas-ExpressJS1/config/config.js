import dotenv from "dotenv";
dotenv.config();
const config = {
  env: process.env.NODE_ENV || "dev",
  db_name: process.env.DB_NAME,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
};

export default config;
