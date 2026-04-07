type CubicHistoryProps = {
  history: { a: number; b: number; c: number; d: number }[];
  onSelect: (coeffs: { a: number; b: number; c: number; d: number }) => void;
};

export function CubicHistory({ history, onSelect }: CubicHistoryProps) {
  return (
    <div className="mt-4">
      <h2 className="font-bold">History</h2>
      <table className="border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border p-1">a</th>
            <th className="border p-1">b</th>
            <th className="border p-1">c</th>
            <th className="border p-1">d</th>
          </tr>
        </thead>
        <tbody>
            {history.map((row, idx) => (
                <tr
                    key={idx}
                    onClick={() => onSelect(row)}
                    className="cursor-pointer hover:bg-gray-200"
                >
                    <td className="border p-1">{row.a}</td>
                    <td className="border p-1">{row.b}</td>
                    <td className="border p-1">{row.c}</td>
                    <td className="border p-1">{row.d}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
