

function plannerPrompt(userInput = "", existingPlan = null) {
  const safeExistingPlan = existingPlan ?? {};

  return `You are a UI planner.

Goal:
Convert user intent into a structured UI plan.

Rules:
- Output ONLY valid JSON
- Use only allowed components
- Reuse existing plan when provided
- Do NOT generate code
- Deterministic output structure

Allowed components:
Navbar, Sidebar, Table, Card, Button, Modal, Form, Input, Chart

Existing plan:
${JSON.stringify(safeExistingPlan, null, 2)}

User request:
${String(userInput)}

Output format:
{
  "layout": "sidebar-main | single-column",
  "components": [
    { "id": "string", "type": "ComponentName", "props": {} }
  ]
}`;
}

module.exports = plannerPrompt;
