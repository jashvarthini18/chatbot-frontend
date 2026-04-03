import { MessageSquare } from "lucide-react";

export default function AuthLayout({ title, children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">

        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-2 text-slate-900 font-semibold">
            <MessageSquare size={20} />
            MineBot
          </div>
        </div>

        <h1 className="text-xl font-semibold text-slate-900 mb-6 text-center">
          {title}
        </h1>

        {children}
      </div>
    </div>
  );
}
