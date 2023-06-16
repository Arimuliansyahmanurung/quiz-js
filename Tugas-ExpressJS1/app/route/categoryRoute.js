import { Router } from "express";
import indexController from "../controller/indexController.js";
const routes = Router();

routes.post("/create", indexController.categoryController.createCategory);

export default routes;
