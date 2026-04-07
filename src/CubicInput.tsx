import { useEffect } from "react";
import { solveCubic } from "./cubicSolver";

type Props = {
  a: number;
  b: number;
  c: number;
  d: number;
  setA: (v: number) => void;
  setB: (v: number) => void;
  setC: (v: number) => void;
  setD: (v: number) => void;
  setP: (v: number) => void;
  setQ: (v: number) => void;
  setDiscrim: (v: number) => void;
  setRoots: (v: (number | string)[]) => void;
  history: { a: number; b: number; c: number; d: number }[];
  setHistory: (v: { a: number; b: number; c: number; d: number }[]) => void;
};

export default function CubicInput({
  a,
  b,
  c,
  d,
  setA,
  setB,
  setC,
  setD,
  setP,
  setQ,
  setDiscrim,
  setRoots,
  history,
  setHistory,
}: Props) {
  useEffect(() => {
    const { p, q, discrim, roots } = solveCubic(a, b, c, d);
    setP(p);
    setQ(q);
    setDiscrim(discrim);
    setRoots(roots);
  }, [a, b, c, d]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setHistory([...history, { a, b, c, d }]);
  };

  return (
    <form
      onSubmit={handleSave}
      className="flex flex-col gap-2 p-4 border rounded shadow"
    >
      <input
        type="number"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
        placeholder="a"
        className="border p-2 rounded"
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
        placeholder="b"
        className="border p-2 rounded"
      />
      <input
        type="number"
        value={c}
        onChange={(e) => setC(Number(e.target.value))}
        placeholder="c"
        className="border p-2 rounded"
      />
      <input
        type="number"
        value={d}
        onChange={(e) => setD(Number(e.target.value))}
        placeholder="d"
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="mt-2 p-2 text-white rounded"
        style ={{backgroundColor: "orange"}}
      >
        Save
      </button>
    </form>
  );
}
