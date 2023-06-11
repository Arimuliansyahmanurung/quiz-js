// import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();
// export const connection = new Pool({
//   user: process.env.PGUSER,
//   host: process.env.PGHOST,
//   database: process.env.PGDATABASE,
//   password: process.env.PGPASSWORD,
//   port: process.env.PGPORT,
// });

const conn = {
  HOST: process.env.PGHOST,
  USER: process.env.PGUSER,
  PASSWORD: process.env.PGPASS,
  DB: process.env.PGDB,
};

export default conn;
