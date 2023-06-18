import express from "express";
import indexController from "../controller/indexController.js";

const routes = express.Router();

routes.post("/create", indexController.userController.createUser);
routes.get("/", indexController.userController.getUser);
routes.post("/item", indexController.userController.itemProduct);
export default routes;
