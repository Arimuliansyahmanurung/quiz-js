import express from "express";
import indexController from "../controller/indexController.js";

const routes = express.Router();

routes.post("/create", indexController.orderController.order);

export default routes;
