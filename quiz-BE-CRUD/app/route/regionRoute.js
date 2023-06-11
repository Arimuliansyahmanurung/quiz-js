import express from "express";

import indexController from "../controller/indexController";
const router = express.Router();

router.get("/", indexController.regionController.findAll);
router.get("/:ids", indexController.regionController.findOne);
router.post("/", indexController.regionController.create);
router.put("/:id", indexController.regionController.update);
router.delete("/:id", indexController.regionController.deleted);
router.get("/query/:id", indexController.regionController.querySQL);
export default router;
