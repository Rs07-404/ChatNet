import express from "express";
import { getMessage, sendMessage } from "../controllers/message.controller.js";
import authoriseUser from "../middleware/authoriseUser.js";

const router = express.Router();

router.get("/:id", authoriseUser, getMessage);
router.post("/send/:id", authoriseUser, sendMessage);

export default router