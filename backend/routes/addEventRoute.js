import express from "express";
import {
  eventController,
  getAllEvent,
  getEventById,
  searchEvent,
} from "../controllers/addEventController.js";

const router = express.Router();

router.post("/addevent", eventController);
router.get("/getallevents", getAllEvent);
router.get("/getevent/:id", getEventById);
router.get("/events/search", searchEvent);

export default router;
