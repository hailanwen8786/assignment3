import { useRef, useEffect } from "react";

type GraphProps = {
  coeffs: { a: number; b: number; c: number; d: number };
};

function drawBase(ctx: CanvasRenderingContext2D) {
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

}

export function DrawRoots(x: number, ctx: CanvasRenderingContext2D) {
    if (!isNaN(x)) {
        ctx.beginPath();
        ctx.arc(x, 200, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.stroke();
    }

    console.log("THIS IS WORKING");
}

function clearGraph(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    drawBase(ctx);
}

function drawLine(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(50, 100);
    ctx.lineTo(150, 120);
    ctx.lineTo(250, 80);
    ctx.lineTo(350, 140);
    ctx.stroke();
}

export function DrawGraph({ coeffs }: GraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    clearGraph(canvas, ctx);
    drawLine(ctx); 

    let start = true;
    ctx.beginPath();
    for (let x = -15; x <= 15; x += 0.01) {
      let y = coeffs.a * x * x * x + coeffs.b * x * x + coeffs.c * x + coeffs.d;
      let cx = x * 20 + 300;
      let cy = 200 - y * 20;

      if (start) {
        ctx.moveTo(cx, cy);
        start = false;
      } else {
        ctx.lineTo(cx, cy);
      }
    }
    ctx.strokeStyle = "red";
    ctx.stroke();

  }, [coeffs]);

  return <canvas ref={canvasRef} width={600} height={400} className="border mt-4"/>;
}
