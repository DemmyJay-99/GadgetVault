import { login, signUp } from "../controllers/AuthController.js";
import express from "express";
import { userVerification } from "../middleware/authMiddleware.js";
const router = express.Router()

router.post("/signup", signUp)
router.post("/login", login)
router.post("/", userVerification)

export default router