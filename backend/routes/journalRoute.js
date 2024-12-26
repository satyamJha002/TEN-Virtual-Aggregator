import express from "express";
import {
  deleteJournal,
  getJournals,
  postJournal,
  updateJournals,
} from "../controllers/journalController.js";
const router = express.Router();

router.post("/newjournal", postJournal);
router.get("/alljournals", getJournals);
router.put("/updatejournal/:id", updateJournals);
router.delete("/deletejournal", deleteJournal);

export default router;
