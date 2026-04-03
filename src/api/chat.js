import { apiFetch } from "./client";

export async function sendMessage(message) {
  const res = await apiFetch("/api/chat", {
    method: "POST",
    body: JSON.stringify({ userMessage: message }),
  });

  return res.json();
}
