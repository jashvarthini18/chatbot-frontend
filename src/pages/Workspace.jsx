import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
import ChatPanel from "../chat/ChatPanel";

export default function Workspace() {
  const navigate = useNavigate();

  const [sessions, setSessions] = useState([]);
  const [activeId, setActiveId] = useState(null);

  const activeSession = sessions.find((s) => s.id === activeId);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <div className="h-screen flex bg-slate-50 text-slate-900">
      <Sidebar
        sessions={sessions}
        activeId={activeId}
        setActiveId={setActiveId}
        setSessions={setSessions}
        onLogout={logout}   
      />
      
      <ChatPanel
        session={activeSession}
        setSessions={setSessions}
        setActiveId={setActiveId}
      />
    </div>
  );
}
