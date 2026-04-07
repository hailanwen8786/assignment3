type Props = {
  history: { a: number; b: number; c: number; d: number }[];
  setA: (v: number) => void;
  setB: (v: number) => void;
  setC: (v: number) => void;
  setD: (v: number) => void;
};
export default function CubicHistory({
  history,
  setA,
  setB,
  setC,
  setD,
}: Props) {
  return (
    <table className="border-collapse border border-gray-400 w-full my-2">
      <thead>
        <tr style={{backgroundColor: "orange"}}>
          <th className="border px-2">#</th>
          <th className="border px-2">a</th>
          <th className="border px-2">b</th>
          <th className="border px-2">c</th>
          <th className="border px-2">d</th>
        </tr>
      </thead>
      <tbody>
        {history.map((h, i) => (
          <tr
            key={i}
            className="cursor-pointer hover:bg-gray-200"
            onClick={() => {
              setA(h.a);
              setB(h.b);
              setC(h.c);
              setD(h.d);
            }}
          >
            <td className="border px-2">{i + 1}</td>
            <td className="border px-2">{h.a}</td>
            <td className="border px-2">{h.b}</td>
            <td className="border px-2">{h.c}</td>
            <td className="border px-2">{h.d}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
