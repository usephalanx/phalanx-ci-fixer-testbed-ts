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

export function percentage(part: number, whole: number): number {
  if (whole === 0) {
    throw new Error('cannot compute percentage of zero');
  }
  return (part / whole) * 100;
}

export function average(values: number[]): number {
  if (values.length === 0) {
    throw new Error('cannot average an empty list');
  }
  return values.reduce((a, b) => a + b, 0) / values.length;
}
