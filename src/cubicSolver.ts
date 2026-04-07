function cbrt(x: number) {
    if (x < 0) {
        return -Math.pow(-x, 1 / 3);
    } else {
        return Math.pow(x, 1 / 3);
    }
}

export function solveCubic(a: number, b: number, c: number, d: number) {
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

    return { p, q, discrim, roots };
}