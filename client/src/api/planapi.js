export async function generatePlan(message, previousPlan) {
  const response = await fetch("http://localhost:3000/api/plan-ui", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message,
      previousPlan
    })
  });

  if (!response.ok) {
    throw new Error("Failed to generate plan");
  }

  return response.json();
}
