import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import models, { sequelize } from "./app/models/init-models.js";
import router from "./app/route/indexRouter.js";
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(async (req, res, next) => {
  req.context = { models };
  next();
});
/**
 * Database Testing*
sequelize
  .sync()
  .then(() => {
    console.log("test successful");
  })
  .catch((err) => {
    console.log("test failed" + err.message);
  });
 */

app.use("/region", router.regionRoute);
app.use("/country", router.countriesRoute);
app.use("/employee", router.employeesRoute);
app.listen(process.env.PORT, () =>
  console.log(`listening on http//localhost:${process.env.PORT}`)
);
