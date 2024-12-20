import express from "express";
import { upload } from "../middlewares/multer.js";
import { submitPaper } from "../controllers/submissionController.js";

const router = express.Router();

router.post("/", upload.single("file"), submitPaper);

export default router;
