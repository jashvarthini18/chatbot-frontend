// const BASE_URL = import.meta.env.VITE_API_URL;
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export async function apiFetch(url, options = {}) {
  const token = localStorage.getItem("token");

  const headers = {
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  if (!(options.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  const res = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "Request failed");
  }

  return res.json();
}

export async function sendMessage(message) {
  return apiFetch("/api/chat", {
    method: "POST",
    body: JSON.stringify({ userMessage: message }),
  });
}

export async function uploadDocument(file) {
  const formData = new FormData();
  formData.append("file", file);

  return apiFetch("/process-document", {
    method: "POST",
    body: formData,
  });
}
