import dotenv from "dotenv";
dotenv.config();
import express from "express";
import models, { sequelize } from "./app/model/init-models.js";
import routes from "./app/route/indexRoute.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(async (req, res, next) => {
  req.context = { models };
  next();
});

app.use("/auth", routes.userRoute);
app.use("/user", routes.userRoute);
app.use("/category", routes.categoryRoute);
app.use("/product", routes.productRoute);
app.use("/order", routes.orderRoute);
const port = process.env.PORT;
app.listen(port, () => console.log(`listening on port ${port}`));
