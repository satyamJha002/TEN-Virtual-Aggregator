import express from "express";
import { createResearch } from "../controllers/researchController.js";

const router = express.Router();

router.post("/research", createResearch);

export default router;
