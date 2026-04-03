import { User, Bot } from "lucide-react";

export default function ChatMessage({ role, content }) {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[70%] rounded-xl px-4 py-3 ${
          isUser
            ? "bg-slate-100 text-slate-800"
            : "bg-white border border-slate-200 text-slate-900 shadow-sm"
        }`}
      >
        <div
          className={`flex items-center gap-2 mb-2 text-xs uppercase tracking-wide ${
            isUser ? "justify-end text-slate-500" : "text-slate-400"
          }`}
        >
          {isUser ? <User size={14} /> : <Bot size={14} />}
          <span>{isUser ? "You" : "Assistant"}</span>
        </div>

        <div className="text-sm leading-relaxed whitespace-pre-wrap">
          {content}
        </div>
      </div>
    </div>
  );
}
