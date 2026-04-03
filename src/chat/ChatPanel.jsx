import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

export default function ChatPanel({ session, setSessions }) {
  if (!session) {
    return (
      <main className="flex-1 flex items-center justify-center text-slate-400 text-sm">
        Start a new conversation
      </main>
    );
  }

  return (
    <main className="flex-1 flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-6 py-10 space-y-8">
          {session.messages.map((m, i) => (
            <ChatMessage key={i} {...m} />
          ))}
        </div>
      </div>

      <ChatInput session={session} setSessions={setSessions} />
    </main>
  );
}
