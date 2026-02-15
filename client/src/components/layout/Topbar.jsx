export default function Topbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white font-bold">
          AI
        </div>

        <div>
          <h1 className="text-lg font-bold gradient-text">
            AI Agent → Deterministic UI Generator
          </h1>
          <p className="text-xs text-blue-400">
            Build interfaces with intention
          </p>
        </div>
      </div>

     
    </header>
  );
}
