const validatePlanStructure = require("./planSchema");

function validatePlan(plan) {
  try {
    validatePlanStructure(plan);
    return true;
  } catch (error) {
    console.error("Validation Error:", error.message);
    throw new Error("Plan validation failed");
  }
}

module.exports = validatePlan;
