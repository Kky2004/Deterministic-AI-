// require("dotenv").config();
// const { GoogleGenAI } = require("@google/genai");

// const ai = new GoogleGenAI({
//   apiKey: process.env.GEMINI_API_KEY
// });

// async function callGeneratorLLM(prompt) {
//   try {
//     // const response = await ai.models.generateContent({
//     //   model: "gemini-3-flash-preview",
//     //   contents: prompt
//      const response = await ai.models.generateContent({
//       model: "gemini-2.0-flash",
//       contents: [
//         {
//           role: "user",
//           parts: [{ text: prompt }]
//         }
//       ]
//     });

//     let text = response.text;

//     // Remove markdown if model adds it
//     if (text.includes("```")) {
//       text = text.replace(/```[a-z]*\n?/gi, "").replace(/```/g, "");
//     }

//     return text.trim();

//   } catch (error) {
//     console.error("Generator LLM Error:", error.message);
//     throw new Error("Failed to generate UI code");
//   }
// }

// module.exports = callGeneratorLLM;

const aiclient  = require("../planner/aiclient");
const generatePrompt =require("./generatePrompt");

async function runGenerator(plan, userInput) {
  const response = await aiclient(
    generatePrompt(plan, userInput)
  );

    // remove markdown if AI returns ```jsx or ```json
  const cleaned = response
    .replace(/```jsx/g, "")
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return cleaned;
}

module.exports = runGenerator;