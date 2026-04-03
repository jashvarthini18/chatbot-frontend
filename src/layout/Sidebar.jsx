import { MessageSquare, Trash2, LogOut } from "lucide-react";

export default function Sidebar({
  sessions,
  activeId,
  setActiveId,
  setSessions,
  onLogout,
}) {
  const newChat = () => {
    const id = crypto.randomUUID();
    setSessions((prev) => [
      { id, title: "New conversation", messages: [] },
      ...prev,
    ]);
    setActiveId(id);
  };

  const deleteChat = (id) => {
    setSessions((prev) => {
      const updated = prev.filter((s) => s.id !== id);

      if (id === activeId) {
        setActiveId(updated.length ? updated[0].id : null);
      }

      return updated;
    });
  };

  return (
    <aside className="w-72 bg-white border-r border-slate-200 flex flex-col">
      <div className="p-4 border-b border-slate-200 flex items-center gap-2">
        <MessageSquare size={18} className="text-slate-600" />
        <span className="text-sm font-semibold tracking-wide">
          MineBot
        </span>
      </div>

      <div className="p-4">
        <button
          onClick={newChat}
          className="w-full text-sm border border-slate-300 rounded-lg py-2 hover:bg-slate-50"
        >
          + New Chat
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {sessions.map((s) => (
          <div
            key={s.id}
            className={`group flex items-center justify-between px-4 py-3 border-b border-slate-100 hover:bg-slate-50 ${
              s.id === activeId ? "bg-slate-100" : ""
            }`}
          >
            <button
              onClick={() => setActiveId(s.id)}
              className="flex-1 text-left"
            >
              <div className="text-sm font-medium truncate">
                {s.title}
              </div>
              <div className="text-xs text-slate-400 truncate">
                {s.messages.at(-1)?.content || "No messages yet"}
              </div>
            </button>

            <button
              onClick={() => deleteChat(s.id)}
              className="ml-2 opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-600 transition"
              title="Delete conversation"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>

      <div className="border-t p-4">
        <button
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 text-sm text-red-600 hover:bg-red-50 rounded-lg py-2"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  );
}
