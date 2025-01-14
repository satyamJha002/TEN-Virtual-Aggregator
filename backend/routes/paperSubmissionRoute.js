import express from "express";
import { paperSubmission } from "../controllers/paperSubmissionController.js";
import { upload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/paper-submission", upload.single("file"), paperSubmission);

export default router;
