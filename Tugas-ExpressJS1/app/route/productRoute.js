import { Router } from "express";
import indexController from "../controller/indexController.js";
import auth from "../auth/login.js";
const routes = Router();

routes.post(
  "/create",
  auth.checkToken,
  indexController.productController.createProduct
);
routes.get(
  "/findAll",
  //   auth.checkToken,
  indexController.productController.getProduct
);
routes.get(
  "/findByCategory",
  auth.checkToken,
  indexController.productController.getProductByCategory
);
export default routes;
