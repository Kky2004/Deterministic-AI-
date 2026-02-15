const aiclient  = require("./aiclient");
const plannerPrompt =require("./plannerPrompt");

async function runPlanner(input, existingPlan) {
  const response = await aiclient(
    plannerPrompt(input, existingPlan)
  );

  return JSON.parse(response);
}

module.exports = runPlanner;
