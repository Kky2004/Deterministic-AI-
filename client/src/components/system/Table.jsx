export default function Table() {
  return (
    <table className="w-full text-sm text-left text-zinc-300 border border-zinc-800">
      <thead className="bg-zinc-900 text-zinc-400">
        <tr>
          <th className="px-2 py-1 border-b border-zinc-800">Name</th>
          <th className="px-2 py-1 border-b border-zinc-800">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-2 py-1 border-b border-zinc-800">Item A</td>
          <td className="px-2 py-1 border-b border-zinc-800">123</td>
        </tr>
        <tr>
          <td className="px-2 py-1">Item B</td>
          <td className="px-2 py-1">456</td>
        </tr>
      </tbody>
    </table>
  );
}
