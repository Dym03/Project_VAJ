import express from "express";
import * as boulderController from "../controllers/boulderController";

const router = express.Router();

router.get("/boulders", boulderController.getAllBoulders);
router.post("/boulders", boulderController.createBoulder);
router.put("/boulders/:id", boulderController.updateBoulder);
router.delete("/boulders", boulderController.deleteBoulder);

export default router;
