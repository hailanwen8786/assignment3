import { useState, useRef } from "react";

function cbrt(x: number) {
  if (x < 0) {
    return -Math.pow(-x, 1 / 3);
  } else {
    return Math.pow(x, 1 / 3);
  }
}

export const solveCubic = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [c, setC] = useState<number>(0);
  const [d, setD] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const p = (3 * a * c - b * b) / (3 * a * a);
    const q =
      (27 * a * a * d - 9 * a * b * c + 2 * b * b * b) / (27 * a * a * a);
    const discrim = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
    const u = cbrt(-q / 2 + Math.sqrt(discrim));
    const v = cbrt(-q / 2 - Math.sqrt(discrim));
    const y = u + v;

    let roots = [];

    if (inputRef.current) {
      if (discrim > 0) {
        roots.push(y - b / (3 * a));
        roots.push("Complex Number");
        roots.push("Complex Number");
      } else if (discrim === 0) {
        const r = cbrt(-q / 2);

        roots.push(2 * r - b / (3 * a));
        roots.push(-r - b / (3 * a));
        roots.push(-r - b / (3 * a));
      } else {
        const k = 2 * Math.sqrt(-p / 3);
        const theta = Math.acos(((3 * q) / (2 * p)) * Math.sqrt(-3 / p));

        roots.push(k * Math.cos(theta / 3) - b / (3 * a));
        roots.push(k * Math.cos((theta + 2 * Math.PI) / 3) - b / (3 * a));
        roots.push(k * Math.cos((theta + 4 * Math.PI) / 3) - b / (3 * a));
      }
      inputRef.current.value = `x1=${roots[0]}, x2=${roots[1]}, x3=${roots[2]}`;
    }
  };

  return (
    <div className="m-0 font-sans bg-[#cfd3d6] text-center">
      <h1 className="text-center text-2xl font-sans text-[#f57c00]">
        Cubic Solver
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="font-semibold text-gray-700 text-sm">a value:</label>
        <input
          type="number"
          value={a}
          onChange={(e) => setA(Number(e.target.value))}
          required
          className="p-2.5 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-[#667eea] focus:ring-2 focus:ring-[#667eea]/20"
        ></input>

        <label className="font-semibold text-gray-700 text-sm">b value:</label>
        <input
          type="number"
          value={b}
          onChange={(e) => setB(Number(e.target.value))}
          required
          className="p-2.5 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-[#667eea] focus:ring-2 focus:ring-[#667eea]/20"
        ></input>

        <label className="font-semibold text-gray-700 text-sm">c value:</label>
        <input
          type="number"
          value={c}
          onChange={(e) => setC(Number(e.target.value))}
          required
          className="p-2.5 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-[#667eea] focus:ring-2 focus:ring-[#667eea]/20"
        ></input>

        <label className="font-semibold text-gray-700 text-sm">d value:</label>
        <input
          type="number"
          value={d}
          onChange={(e) => setD(Number(e.target.value))}
          required
          className="p-2.5 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-[#667eea] focus:ring-2 focus:ring-[#667eea]/20"
        ></input>

        <label className="font-semibold text-gray-700 text-sm">Result:</label>
          <input
            ref={inputRef}
            type="text"
            readOnly
            className="p-2.5 rounded-lg bg-gray-100 font-semibold text-base"
          />

          <input
            type="submit"
            value="Save"
            className="mt-2 p-3 rounded-xl bg-[#667eea] text-white font-semibold text-base cursor-pointer transition-all duration-200 hover:bg-[#5a67d8] active:translate-y-0 hover:-translate-y-1"
          />
      </form>
    </div>
  );
};
