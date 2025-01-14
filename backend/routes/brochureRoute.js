import express from "express";
import { createBrochure } from "../controllers/brochureController.js";

const router = express.Router();

router.post("/conference-brochure", createBrochure);

export default router;
