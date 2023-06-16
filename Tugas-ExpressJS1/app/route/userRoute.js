import { Router } from "express";
import indexController from "../controller/indexController.js";
import auth from "../auth/login.js";

const route = Router();

route.post("/signup", indexController.userController.createUser);
route.post("/signin", auth.userLogin);
route.post(
  "/profile",
  auth.checkToken,
  indexController.userController.createCustomer
);
route.get("/customer", indexController.userController.getUserCustomer);

export default route;
