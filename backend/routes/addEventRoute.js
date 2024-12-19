import express from "express";
import { eventController } from "../controllers/addEventController";

const router = express.Router();

router.post("/addevent", eventController);

export default router;
