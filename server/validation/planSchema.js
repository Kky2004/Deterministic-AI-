const { allowedComponents } = require("../shared/allowedComponents");

function validatePlanStructure(plan) {
  if (!plan) throw new Error("Plan is required");

  if (!["single-column", "sidebar-main", "modal-view"].includes(plan.layout)) {
    throw new Error("Invalid layout type");
  }

  if (!Array.isArray(plan.components)) {
    throw new Error("Components must be an array");
  }

  plan.components.forEach((component) => {
    if (!component.id) {
      throw new Error("Component missing id");
    }

    if (!allowedComponents.includes(component.type)) {
      throw new Error(`Component not allowed: ${component.type}`);
    }

    if (typeof component.props !== "object") {
      throw new Error("Component props must be object");
    }
  });

  return true;
}

module.exports = validatePlanStructure;
