import { useEffect, useRef } from "react";

type Props = { a: number; b: number; c: number; d: number };
export default function CubicGraph({ a, b, c, d }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw axes
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(0, 150);
    ctx.lineTo(300, 150);
    ctx.moveTo(150, 0);
    ctx.lineTo(150, 300);
    ctx.stroke();

    // plot cubic
    ctx.strokeStyle = "red";
    ctx.beginPath();
    for (let x = -150; x <= 150; x++) {
      const y =
        a * Math.pow(x / 10, 3) + b * Math.pow(x / 10, 2) + c * (x / 10) + d;
      const canvasY = 150 - y * 10;
      if (x === -150) ctx.moveTo(x + 150, canvasY);
      else ctx.lineTo(x + 150, canvasY);
    }
    ctx.stroke();
  }, [a, b, c, d]);

  return (
    <canvas ref={canvasRef} width={300} height={300} className="border my-2" />
  );
}
