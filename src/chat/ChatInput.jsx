import { useState } from "react";
import { Send } from "lucide-react";
import { sendMessage } from "../api/client";

export default function ChatInput({ session, setSessions }) {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!value.trim() || loading) return;

    const userMessage = value;
    setValue("");
    setLoading(true);

    setSessions((prev) =>
      prev.map((s) =>
        s.id === session.id
          ? {
              ...s,
              title: s.messages.length === 0
                ? userMessage.slice(0, 30)
                : s.title,
              messages: [
                ...s.messages,
                { role: "user", content: userMessage },
              ],
            }
          : s
      )
    );

    try {
      const res = await sendMessage(userMessage);

      setSessions((prev) =>
        prev.map((s) =>
          s.id === session.id
            ? {
                ...s,
                messages: [
                  ...s.messages,
                  { role: "assistant", content: res.botResponse },
                ],
              }
            : s
        )
      );
    } catch (err) {
      setSessions((prev) =>
        prev.map((s) =>
          s.id === session.id
            ? {
                ...s,
                messages: [
                  ...s.messages,
                  {
                    role: "assistant",
                    content: "Error processing your request.",
                  },
                ],
              }
            : s
        )
      );
    }

    setLoading(false);
  };

  return (
    <div className="border-t border-slate-200 bg-white">
      <div className="max-w-3xl mx-auto px-6 py-4">
        <div className="flex items-center gap-3 border border-slate-300 rounded-xl px-4 py-2 focus-within:border-slate-400">
          <textarea
            rows={1}
            className="flex-1 resize-none bg-transparent outline-none text-sm placeholder:text-slate-400"
            placeholder="Type your question…"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />

          <button
            onClick={handleSend}
            disabled={loading}
            className="flex items-center justify-center text-slate-600 hover:text-slate-900 disabled:opacity-50"
          >
            <Send size={18} />
          </button>
        </div>

        {loading && (
          <p className="text-xs text-slate-400 mt-2">
            Assistant is thinking…
          </p>
        )}
      </div>
    </div>
  );
}
