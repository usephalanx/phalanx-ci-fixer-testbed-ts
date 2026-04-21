# Phalanx CI Fixer v2 — TypeScript Testbed

Controlled failures in TS so the v2 agent can diagnose, fix, and close PRs end-to-end. Mirror of the Python testbed but for the TS scorecard row.

- 5 languages × 4 failure classes = 20 scorecard cells. This repo covers the 4 TS cells.
- Each `failures/*.patch` introduces one class of CI failure when applied to `main`.
- CI runs ESLint + Prettier (Lint job) and Jest + coverage (Test+Coverage job).

## Intentional failure patches

| Patch                     | Cell      | What it breaks                                                |
| ------------------------- | --------- | ------------------------------------------------------------- |
| `01-lint.patch`           | lint      | ESLint `max-len` violation in `src/math_ops.ts`               |
| `02-test-assertion.patch` | test_fail | `multiply` returns `a + b` instead of `a * b`                 |
| `03-flake-sleep.patch`    | flake     | `setTimeout(random*3s)` inside a `testTimeout: 2000` jest run |
| `04-coverage-drop.patch`  | coverage  | Adds two untested helpers → coverage under 80% threshold      |

## Running locally

```bash
npm ci
npm run lint        # eslint
npm run format:check # prettier
npm test            # jest + coverage
```
