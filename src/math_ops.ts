/**
 * Basic arithmetic helpers — TS testbed mirror of the Python math_ops.
 * The 4 failure patches under ../failures/ mutate this file (or tests)
 * to exercise each scorecard cell.
 */

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('cannot divide by zero');
  }
  return a / b;
}

export function verboseDescription(): string {
  return 'This is a deliberately very long descriptive message designed to trip ESLint max-len rule at 100 chars.';
}
