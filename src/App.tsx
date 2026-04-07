import { useState } from "react";
import CubicInput from "./CubicInput";
import CubicEquation from "./CubicEquation";
import CubicTable from "./CubicTable";
import CubicGraph from "./CubicGraph";
import CubicHistory from "./CubicHistory";

export default function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [p, setP] = useState(0);
  const [q, setQ] = useState(0);
  const [discrim, setDiscrim] = useState(0);
  const [roots, setRoots] = useState<(number | string)[]>([]);
  const [history, setHistory] = useState<
    { a: number; b: number; c: number; d: number }[]
  >([]);

  return ( //TAILWIND COLOURS NOT WORKING </3
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4" style={{color: "orange"}}>Cubic Solver</h1> 
      <CubicInput
        {...{
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
        }}
      />
      <CubicEquation a={a} b={b} c={c} d={d} />
      <CubicTable p={p} q={q} discrim={discrim} roots={roots} />
      <CubicGraph a={a} b={b} c={c} d={d} roots={roots} />
      <CubicHistory
        history={history}
        setA={setA}
        setB={setB}
        setC={setC}
        setD={setD}
      />
    </div>
  );
}
