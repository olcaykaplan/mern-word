import express from "express";
import {
  getWords,
  createWord,
  uploadWordsCollectively,
} from "../controllers/words.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getWords);
router.post("/word/newWord", auth, createWord);
router.post("/uploadWords", auth, uploadWordsCollectively);

export default router;
