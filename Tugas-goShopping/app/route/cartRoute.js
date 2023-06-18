import express from "express";
import indexController from "../controller/indexController.js";

const routes = express.Router();

routes.post("/add", indexController.cartController.addToCart);

export default routes;
