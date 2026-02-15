export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 text-sm rounded bg-zinc-800 text-white hover:bg-zinc-700 transition"
    >
      {children}
    </button>
  );
}

