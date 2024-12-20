import express from "express";
import {
  eventController,
  getAllEvent,
  getEventById,
} from "../controllers/addEventController.js";

const router = express.Router();

router.post("/addevent", eventController);
router.get("/getallevents", getAllEvent);
router.get("/getevent/:id", getEventById);

export default router;
