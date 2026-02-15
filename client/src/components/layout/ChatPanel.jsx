import { useState } from "react";
import { generateUI } from "../../api/aiclient";
import ReactMarkdown from "react-markdown";


export default function ChatPanel({ result, setResult, messages, setMessages }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
     if (!input.trim()) return;

    try {
      setLoading(true);

      // add user message
      setMessages(prev => [
        ...prev,
        { role: "user", content: input }
      ]);

      const data = await generateUI(input, result?.plan);

      // update global result (plan + code + explanation)
      setResult(data);

      // add AI explanation message
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: data.explanation }
      ]);

      setInput("");
    } catch (err) {
      console.error(err);
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: "Something went wrong." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="
      w-[32%] min-w-[320px] flex flex-col rounded-2xl overflow-hidden
      bg-white/5 backdrop-blur-xs border border-white/10
      animate-slide-left
    ">
      <div className="px-5 py-4 border-b border-white/10 font-semibold text-pink-400">
         Conversation
      </div>

      {/* <div className="flex-1 p-4 overflow-y-auto space-y-4">
        <div className="text-sm text-slate-300">
          Describe your UI…
        </div>
      </div> */}

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, i) => (
          <div
    key={i}
    className={
      msg.role === "user"
        ? "text-right text-blue-400"
        : "bg-white/5 border border-white/10 rounded-xl p-3 text-slate-200"
    }
  >
    <ReactMarkdown>{msg.content}</ReactMarkdown>
  </div>
        ))}
      </div>

      <div className="p-3 border-t border-white/10">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Define your interface…"
          className="
            w-full p-3 rounded-xl
            bg-white/5 border border-black/10
            outline-none focus:ring-2 focus:ring-pink-500/40
          "
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full mt-2 py-2 rounded-xl text-white
          bg-gradient-primary
          hover:-translate-y-0.5 transition-all duration-300"
        >
          {loading ? "Generating..." : "Generate UI"}
        </button>
      </div>
    </section>
  );
}
