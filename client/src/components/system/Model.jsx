export default function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-zinc-900 border border-zinc-800 rounded-md w-96 p-4">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-white">{title || "Modal"}</span>
          <button
            onClick={onClose}
            className="text-xs text-zinc-400 hover:text-white"
          >
            Close
          </button>
        </div>
        <div className="text-sm text-zinc-300">{children}</div>
      </div>
    </div>
  );
}
