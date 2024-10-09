import express from "express";
import authoriseUser from "../middleware/authoriseUser.js";
import { getContacts } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", authoriseUser, getContacts);

export default router;