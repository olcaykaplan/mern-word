import express from "express";
import * as words from '../controllers/words.js';
const router = express.Router();

router.get('/', words.getWords);
router.post('/word/newWord', words.createWord);
router.post('/uploadWords', words.uploadWordsCollectively);

export default router;