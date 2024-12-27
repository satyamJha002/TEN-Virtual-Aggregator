import express from "express";
import { login, register } from "../controllers/adminController.js";
import { adminMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);

router.get("/admin", adminMiddleware, (req, res) => {
  res.send("Admin Page");
});

export default router;
