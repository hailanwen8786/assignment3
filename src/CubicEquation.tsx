type Props = { a: number; b: number; c: number; d: number };
export default function CubicEquation({ a, b, c, d }: Props) {
  return (
    <h2 className="text-xl font-semibold my-2">{`${a}x³ + ${b}x² + ${c}x + ${d} = 0`}</h2>
  );
}
