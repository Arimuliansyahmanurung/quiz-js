import express from "express";
import indexController from "../controller/indexController";

const router = express.Router();

router.get("/", indexController.countriesController.findAll);
router.get("/:ids", indexController.countriesController.findOne);
router.post("/", indexController.countriesController.create);
router.put("/:ids", indexController.countriesController.update);
router.delete("/:ids", indexController.countriesController.deleted);
export default router;
