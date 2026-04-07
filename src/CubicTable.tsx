type Props = {
  p: number;
  q: number;
  discrim: number;
  roots: (number | string)[];
};
export default function CubicTable({ p, q, discrim, roots }: Props) {
  return (
    <table className="border-collapse border border-gray-400 w-full my-2">
      <tbody>
        <tr>
          <th className="border px-2">p</th>
          <td className="border px-2">{p}</td>
        </tr>
        <tr>
          <th className="border px-2">q</th>
          <td className="border px-2">{q}</td>
        </tr>
        <tr>
          <th className="border px-2">Discriminant</th>
          <td className="border px-2">{discrim}</td>
        </tr>
        <tr>
          <th className="border px-2">Root 1</th>
          <td className="border px-2">{roots[0]}</td>
        </tr>
        <tr>
          <th className="border px-2">Root 2</th>
          <td className="border px-2">{roots[1]}</td>
        </tr>
        <tr>
          <th className="border px-2">Root 3</th>
          <td className="border px-2">{roots[2]}</td>
        </tr>
      </tbody>
    </table>
  );
}
