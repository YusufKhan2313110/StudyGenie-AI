import { GoogleGenAI } from "@google/genai";

export async function askGemini(prompt) {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
}

export async function* streamGemini(prompt) {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const stream = await ai.models.generateContentStream({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  for await (const chunk of stream) {
    if (chunk.text) {
      yield chunk.text;
    }
  }
}