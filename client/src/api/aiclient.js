export async function generateUI(message, previousPlan) {
 const res = await fetch("http://localhost:3000/api/ai/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt: message,
      previousPlan
    })
  });

  if (!res.ok) {
    throw new Error("Failed to generate UI");
  }

  return await res.json();
}
