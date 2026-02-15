export default function Chart({ title, data = [], chartType }) {
  // Ensure data is always an array
  const safeData = Array.isArray(data) ? data : [];

  return (
    <div className="border border-zinc-800 bg-zinc-900 rounded-md p-3 mb-3">
      {title && (
        <h3 className="text-sm font-medium text-white mb-2">
          {title}
        </h3>
      )}

      {safeData.length === 0 ? (
        <p className="text-xs text-zinc-400">No data</p>
      ) : (
        <div className="space-y-1">
          {safeData.map((item, index) => (
            <div
              key={index}
              className="text-xs text-zinc-300 bg-zinc-800 rounded px-2 py-1"
            >
              {JSON.stringify(item)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
