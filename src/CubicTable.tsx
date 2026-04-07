type CubicTableProps = {
  coeffs: { a: number; b: number; c: number; d: number };
};

function cbrt(x: number) {
  if (x < 0) {
    return -Math.pow(-x, 1 / 3);
  } else {
    return Math.pow(x, 1 / 3);
  }
}

export function CubicTable({ coeffs }: CubicTableProps) {
  const { a, b, c, d } = coeffs;

  const p = (3 * a * c - b * b) / (3 * a * a);
  const q = (27 * a * a * d - 9 * a * b * c + 2 * b * b * b) / (27 * a * a * a);
  const discrim = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
  const u = cbrt(-q / 2 + Math.sqrt(discrim));
  const v = cbrt(-q / 2 - Math.sqrt(discrim));
  const y = u + v;

   let roots = [];

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
    const theta = Math.acos((3 * q / (2 * p)) * Math.sqrt(-3 / p));


    roots.push(k * Math.cos(theta / 3) - b / (3 * a));
    roots.push(k * Math.cos((theta + 2 * Math.PI) / 3) - b / (3 * a));
    roots.push(k * Math.cos((theta + 4 * Math.PI) / 3) - b / (3 * a));

  }

  return (
    <table className="width-[400px] border border-[#bdbdbd] rounded-[8px] border-collapse bg-[#e5e5e5]">
            <tr>
                <th className="border px-4 py-2">p:</th>
                <td className="border px-4 py-2">{p || "-"}</td>
            </tr>
            <tr>
                <th className="border px-4 py-2">q:</th>
                <td className="border px-4 py-2">{q || "-"}</td>
            </tr>
            <tr>
                <th className="border px-4 py-2">Discriminant:</th>
                <td className="border px-4 py-2">{discrim || "-"}</td>
            </tr>
            <tr>
                <th className="border px-4 py-2 bg-[#f57c00] text-[#e5e5e5]">Value</th>
                <th className="border px-4 py-2 bg-[#f57c00] text-[#e5e5e5]">X</th>
                <th className="border px-4 py-2 bg-[#f57c00] text-[#e5e5e5]">Y</th>
            </tr>
            <tr>
                <th className="border px-4 py-2">Root 1:</th>
                <td className="border px-4 py-2">{roots[0] || "-"}</td>
                <td className="border px-4 py-2">0</td>
            </tr>
            <tr>
                <th className="border px-4 py-2">Root 2:</th>
                <td className="border px-4 py-2">{roots[1] || "-"}</td>
                <td className="border px-4 py-2">0</td>
            </tr>
            <tr>
                <th className="border px-4 py-2">Root 3:</th>
                <td className="border px-4 py-2">{roots[2] || "-"}</td>
                <td className="border px-4 py-2">0</td>
            </tr>
    </table>
  )
}
