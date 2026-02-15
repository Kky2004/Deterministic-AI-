const { allowedComponents } = require("../../shared/allowedComponents");

function buildExplainerPrompt(plan, userRequest) {
  return `
You are a UI decision explainer.

Your job:
Explain why this UI structure was created.

RULES:
- Use simple English
- Be clear and concise
- Reference layout choice
- Explain each component’s purpose
- Do NOT generate code
- Do NOT output JSON
- Deterministic explanation

Allowed components:
${allowedComponents.join(", ")}

USER REQUEST:
${userRequest}

FINAL UI PLAN:
${JSON.stringify(plan, null, 2)}

EXPLANATION FORMAT:

Layout Decision:
Explain why this layout was selected.

Component Decisions:
- ComponentName → purpose in UI
- ComponentName → purpose in UI

User Goal Mapping:
Explain how UI satisfies user request.
`;
}

module.exports = buildExplainerPrompt;
