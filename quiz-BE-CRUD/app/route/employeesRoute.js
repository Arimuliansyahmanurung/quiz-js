import express from "express";
import indexController from "../controller/indexController";

const router = express.Router();

router.get("/", indexController.employeesController.findAll);
router.get("/:id", indexController.employeesController.findOne);
export default router;
