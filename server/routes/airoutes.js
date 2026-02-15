const express = require("express");
const runPlanner = require("../llm/planner/plannerLLM");
const runGenerator = require("../llm/generator/generateLLM");
const runExplainer = require("../llm/explainer/explainerLLM");

const router = express.Router();

router.post("/generate", async (req, res) => {
  try {
    const { message, previousPlan } = req.body;

    const plan = await runPlanner(message, previousPlan);
    const code = await runGenerator(plan);
    const explanation = await runExplainer(message, plan);

    res.json({ plan, code, explanation });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI pipeline failed" });
  }
});

module.exports = router;
