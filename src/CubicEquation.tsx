type CubicEquationProps ={
    coeffs: {a: number; b: number; c: number; d: number};
};

export const cubicEquation = ({coeffs}: CubicEquationProps) => {
    const {a, b, c, d} = coeffs;
    return (
        <div className="text-lg mt-4">
            Equation: y = {a}x^3 + {b}x^2 + {c}x + {d}
        </div>
    );
}