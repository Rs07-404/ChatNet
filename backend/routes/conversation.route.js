import express from "express";
import authoriseUser from "../middleware/authoriseUser.js";
import { createConversation } from "../controllers/conversation.controller.js";

const router = express.Router();
router.post("/create/:username", authoriseUser, createConversation);

export default router