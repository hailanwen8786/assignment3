import { useState } from "react";
import { SolveCubic } from "./CubicInput";
import { CubicEquation } from "./CubicEquation";
import { CubicTable } from "./CubicTable";
import { DrawGraph } from "./CubicGraph";
import { DrawRoots } from "./CubicGraph";
import { CubicHistory } from "./CubicHistory";

export function App() {
  const [coeffs, setCoeffs] = useState({ a: 0, b: 0, c: 0, d: 0 });
  const [history, setHistory] = useState<(typeof coeffs)[]>([]);

  const handleSubmit = (newCoeffs: typeof coeffs) => {
    setCoeffs(newCoeffs);
    setHistory((prev) => [newCoeffs, ...prev]);
  };

  const handleSelect = (selectedCoeffs: typeof coeffs) => {
    setCoeffs(selectedCoeffs);
  };

  return (
    <div>
      <SolveCubic />
      <CubicEquation coeffs={coeffs} />
      <CubicTable coeffs={coeffs} />
      <DrawGraph coeffs={coeffs} />
      <CubicHistory history={history} onSelect={handleSelect} />
    </div>
  );
}
