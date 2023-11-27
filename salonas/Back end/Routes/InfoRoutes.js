import express from "express";
import {
  deleteInfo,
  getAllInfo,
  getInfoById,
  updateInfo,
} from "../Controllers/controllers.js";

const router = express.Router();

router.get("/info", getAllInfo);

router.get("/info/:id", getInfoById);

router.post("/info", getAllInfo);

router.delete("/info/:id", deleteInfo);

router.put("/info/:id", updateInfo);

export default router;