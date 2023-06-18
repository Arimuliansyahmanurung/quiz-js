import express from "express";
import indexController from "../controller/indexController.js";

const routes = express.Router();

routes.post("/create", indexController.categoryController.createCategory);
routes.get("/", indexController.categoryController.getCategory);

export default routes;
