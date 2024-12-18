import express from "express";
import { contactDetails } from "../controllers/contactController.js";

const router = express.Router();

router.post("/contact", contactDetails);

export default router;
