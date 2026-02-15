// require("dotenv").config();
// const { GoogleGenAI } = require("@google/genai");

// const ai = new GoogleGenAI({
//   apiKey: process.env.GEMINI_API_KEY
// });

// async function runExplainerLLM(prompt) {
//   try {
//     const response = await ai.models.generateContent({
//       model: "gemini-2.0-flash",
//       contents: prompt
//     });

//     return response.text;
//   } catch (error) {
//     console.error("Explainer LLM Error:", error.message);
//     throw new Error("Failed to generate explanation");
//   }
// }

// module.exports = runExplainerLLM;

const aiclient = require("../planner/aiclient");
const explainerPrompt = require("./explainerPrompt");

async function runExplainer(plan, userInput) {
  const response = await aiclient(
    explainerPrompt(plan, userInput)
  );

  const cleaned = response
    .replace(/```/g, "")
    .trim();

  return cleaned; // explanation is plain text
}

module.exports = runExplainer;
