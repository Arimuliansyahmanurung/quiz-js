import { Router } from "express";
import indexController from "../controller/indexController.js";
const routes = Router();

routes.post("/create", indexController.orderController.orderProduct);
routes.post("/create/detail", indexController.orderController.detailOrder);
routes.get("/detail", indexController.orderController.customerOrder);
export default routes;
