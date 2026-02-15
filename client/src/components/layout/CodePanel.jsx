export default function CodePanel({ code }) {
  return (
    <section className="w-[33%] flex flex-col rounded-2xl overflow-hidden glass-effect">

      <div className="px-5 py-4 border-b border-white/10 text-violet-400 font-semibold">
        Generated code
      </div>

      <pre className="text-sm overflow-auto">
        {code || "No code generated yet"}
      </pre>

    </section>
  );
}
