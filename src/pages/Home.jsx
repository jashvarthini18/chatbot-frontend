import { useNavigate } from "react-router-dom";
import { MessageSquare, Shield, Zap, Scale } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2 text-slate-900 font-semibold">
          <MessageSquare size={20} />
          MineBot
        </div>

        <button
          onClick={() => navigate("/signup")}
          className="text-sm border border-slate-300 px-4 py-2 rounded-lg hover:bg-slate-100"
        >
          Sign up
        </button>
      </header>

      <main className="flex-1">

        <section className="flex flex-col items-center justify-center text-center px-6 py-20">
          <h1 className="text-4xl font-bold text-slate-900 max-w-2xl">
            AI Assistant for Mining Regulations & Safety Compliance
          </h1>

          <p className="mt-4 text-slate-600 max-w-xl">
            Get instant, structured answers to complex mining
            regulations, safety rules, and legal frameworks —
            designed for professionals who need clarity fast.
          </p>

          <button
            onClick={() => navigate("/signup")}
            className="mt-8 bg-slate-900 text-white px-8 py-3 rounded-xl text-sm hover:bg-slate-800 transition"
          >
            Ask your queries →
          </button>
        </section>

        <section className="bg-white border-y border-slate-200 py-16 px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">

            <Feature
              icon={<Scale size={28} />}
              title="Regulation Expertise"
              text="Built specifically for mining law, compliance, and operational safety."
            />

            <Feature
              icon={<Shield size={28} />}
              title="Reliable Guidance"
              text="Clear, structured responses tailored to regulatory interpretation."
            />

            <Feature
              icon={<Zap size={28} />}
              title="Instant Clarity"
              text="Reduce manual searching and get answers in seconds."
            />

          </div>
        </section>

        <section className="py-20 px-6 text-center">
          <h2 className="text-2xl font-semibold text-slate-900">
            Why MineBot?
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600">
            MineBot is a domain-focused AI assistant designed for
            mining professionals. It helps engineers, managers,
            inspectors, and compliance teams interpret regulations
            quickly and confidently — without navigating dense legal text.
          </p>
        </section>

        <section className="bg-white border-t border-slate-200 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-2xl font-semibold text-slate-900">
              How MineBot helps
            </h2>

            <div className="mt-10 grid md:grid-cols-3 gap-8 text-sm text-slate-600">

              <Step
                number="1"
                title="Ask naturally"
                text="Type questions in plain language."
              />

              <Step
                number="2"
                title="AI interprets"
                text="MineBot analyzes regulatory context instantly."
              />

              <Step
                number="3"
                title="Get structured answers"
                text="Clear, professional explanations in seconds."
              />

            </div>
          </div>
        </section>

      </main>

      <footer className="text-center text-xs text-slate-400 py-6">
        © {new Date().getFullYear()} MineBot
      </footer>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="
      space-y-3 p-6 rounded-xl border border-slate-200 bg-white
      transition-all duration-200
      hover:-translate-y-1
      hover:shadow-md
      hover:border-slate-300
    ">
      <div className="flex justify-center text-slate-900">
        {icon}
      </div>

      <h3 className="font-semibold text-slate-900">
        {title}
      </h3>

      <p className="text-slate-600">
        {text}
      </p>
    </div>
  );
}


function Step({ number, title, text }) {
  return (
    <div className="space-y-2">
      <div className="text-lg font-semibold text-slate-900">
        {number}
      </div>
      <h3 className="font-medium text-slate-900">{title}</h3>
      <p>{text}</p>
    </div>
  );
}
