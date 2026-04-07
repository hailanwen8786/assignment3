import { useEffect, useRef } from "react";

type Props = { a: number; b: number; c: number; d: number; roots:(number|string)[] };
export default function CubicGraph({ a, b, c, d, roots }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(()=>{
    const canvas = canvasRef.current;
    if(!canvas) return;
    const ctx = canvas.getContext("2d");
    if(!ctx) return;

    ctx.clearRect(0,0,canvas.width,canvas.height);

    // Draw axes
    ctx.beginPath();
    ctx.moveTo(300, 0);
    ctx.lineTo(300, 400);
    ctx.strokeStyle = "grey";
    ctx.stroke(); //yummy yummy y-axis

    ctx.beginPath();
    ctx.moveTo(0, 200);
    ctx.lineTo(600, 200);
    ctx.strokeStyle = "grey";
    ctx.stroke(); //can't think of a positive adj. starting with x... </3

    for (let vertCount = 0; vertCount <= 600; vertCount += 20) {
        ctx.beginPath();
        ctx.moveTo(vertCount, 0);
        ctx.lineTo(vertCount, 400);
        ctx.strokeStyle = "silver";
        ctx.stroke();
    }

    for (let horCount = 0; horCount <= 400; horCount += 20) {
        ctx.beginPath();
        ctx.moveTo(0, horCount);
        ctx.lineTo(600, horCount);
        ctx.strokeStyle = "silver";
        ctx.stroke();
    }

    // idk why i have to declare 'let x' in a for loop all of a sudden.
    let start = true;
    ctx.beginPath();
    for (let x = -15; x <= 15; x += 0.01) {
        let y = a * x * x * x + b * x * x + c * x + d;

        let cx = x*20 + 300;
        let cy = 200 - y*20;

        if (start) {
            ctx.moveTo(cx, cy);
            start = false;
        } else {
            ctx.lineTo(cx, cy);
        }
    }
    ctx.strokeStyle = "red";
    ctx.stroke();

    ctx.fillStyle = "blue";
    roots.forEach(root=>{
      if(typeof root === "number"){
        ctx.beginPath();
        ctx.arc(root * 20 + 300, 200, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.stroke();
      }
    });

  },[a,b,c,d,roots]);

  return <canvas ref={canvasRef} width={600} height={400} className="border my-2"/>
}