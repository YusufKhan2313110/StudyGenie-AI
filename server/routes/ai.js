import express from "express";
import { askGemini } from "../services/gemini.js";

import chatPrompt from "../prompts/chat.js";
import summarizePrompt from "../prompts/summarize.js";
import quizPrompt from "../prompts/quiz.js";
import flashcardsPrompt from "../prompts/flashcards.js";
import explainPrompt from "../prompts/explain.js";

const router = express.Router();

router.post("/chat", async (req, res) => {
  try {
    const { prompt, tool = "chat" } = req.body;

    const prompts = {
      chat: chatPrompt,
      summarize: summarizePrompt,
      quiz: quizPrompt,
      flashcards: flashcardsPrompt,
      explain: explainPrompt,
    };

    const systemPrompt = prompts[tool] || chatPrompt;

    const fullPrompt = `${systemPrompt}

User Request:
${prompt}`;

    const response = await askGemini(fullPrompt);

    res.json({
      success: true,
      response,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
});

export default router;