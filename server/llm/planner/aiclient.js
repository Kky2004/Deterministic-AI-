require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

function extractJSON(text) {
  if (!text) return "";

  // Remove ```json ... ``` or ``` ... ```
  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
}

async function callAI(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
     generationConfig: {
      temperature: 0
    }
  });
  console.log(response.text);
  return extractJSON(response.text);
}

module.exports = callAI;
