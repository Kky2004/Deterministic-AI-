const { allowedComponents } = require("../../shared/allowedComponents");

function buildGeneratorPrompt(plan) {
  return `
You are a UI code generator.

Your job:
Convert a structured UI plan into working React JSX.

STRICT RULES:
- Use ONLY these components:
${allowedComponents.join(", ")}

- Do NOT invent components
- Do NOT add styling
- Do NOT use external libraries
- Output ONLY valid React JSX
- Each component must spread props
- Deterministic output
- No explanations
- No markdown
- No comments

COMPONENT USAGE EXAMPLE:
<Button label="Save" />
<Card title="Users" />
<Table columns={["Name"]} rows={[]} />

PLAN:
${JSON.stringify(plan, null, 2)}

OUTPUT FORMAT EXAMPLE:

function GeneratedUI() {
  return (
    <div>
      <Navbar title="Dashboard" />
      <Sidebar items={["Home"]} />
      <Card title="Stats" />
    </div>
  );
}

export default GeneratedUI;
`;
}

module.exports = buildGeneratorPrompt;
