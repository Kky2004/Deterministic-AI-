
export default function Card({ title, children }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-md p-4">
      {title && <div className="text-sm font-medium text-white mb-2">{title}</div>}
      <div className="text-sm text-zinc-300">{children}</div>
    </div>
  );
}
