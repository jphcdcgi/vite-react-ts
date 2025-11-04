# vite-react-ts

A minimal Vite + React + TypeScript starter app.

## Requirements

- Node.js (recommended >= 18)
- npm (bundled with Node) or yarn/pnpm if you prefer

## Install

Install dependencies:

```bash
npm install
# or
# yarn
# pnpm install
```

## Scripts

- `npm run dev` — start Vite dev server (hot reload)
- `npm run build` — run TypeScript check and build production assets (`tsc && vite build`)
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint over the codebase
- `npm run format` — run Prettier to format files
- `npm test` — run Vitest tests

## TypeScript & ESLint

TypeScript configuration is defined in `tsconfig.json` at the project root. Important settings you should know about:

- `baseUrl` is set to `./src/` so imports may be written relative to the `src` root (for example `import Foo from 'components/Foo'`).
- `types` includes `vitest/globals` so Vitest's globals (like `describe`, `it`) are available in tests.
- `include` contains `src` and `vitest.setup.ts` so TypeScript picks up the test setup file and its augmentations (for example `@testing-library/jest-dom`).
  ESLint is configured using `.eslintrc.cjs` with overrides that run type-aware linting for configuration files where appropriate. If ESLint flags those config files in your editor, restart the ESLint server or the editor so the overrides and `tsconfig.json` are picked up.

## Git

- A recommended `.gitignore` is included to avoid committing `node_modules`, build artifacts and editor metadata.

## Tests

Run tests with:

```bash
npm test
```

Vitest is configured to use the `jsdom` environment and loads `vitest.setup.ts` for setup.

## Troubleshooting

- If `npx tsc --noEmit` fails, ensure you have the local `typescript` installed (`npm install`) and your editor's TypeScript service is configured to use the workspace version of TypeScript.
- If ESLint in VS Code still flags `vitest.config.ts`, reload the window or run the ESLint: Restart Server command.

## License

This starter contains no license; add one if you plan to publish.

## Installation (recent changes)

- `package.json` includes a `format:check` script (Prettier) in addition to `format`.
- A `.prettierignore` was added to skip `package-lock.json`, `node_modules/`, `dist/` and `/.vite/`.
  TypeScript config highlights: - Project TypeScript configuration lives in `tsconfig.json` at the repo root. - `baseUrl: ./src/` enables absolute-style imports from the `src` root. - `types` includes `vitest/globals` and `include` includes `vitest.setup.ts` so testing globals and `@testing-library/jest-dom` types are available.
  ESLint: - ESLint uses `.eslintrc.cjs` with per-file overrides; overrides point type-aware linting to `tsconfig.json` where applicable.

After checking out the repo run:

```bash
npm install
npm run format:check   # verify formatting
npm run lint           # verify linting
```

If your editor uses a workspace TypeScript version, reload the window to pick up the updated `tsconfig` layout.

## ESLint migration caveats

If you plan to upgrade to ESLint 9 and migrate to the newer Flat Config (`eslint.config.*`) there are a few caveats to be aware of:

1. DevDependency compatibility: upgrade `eslint` and all related plugins and parsers together. For example, `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin` should be compatible with ESLint 9.

2. Flat config format change: your current `.eslintrc.cjs` is in the legacy hierarchical format. Converting to `eslint.config.cjs` (Flat Config) requires re-declaring all rules, plugins and overrides programmatically. Don't rush this in the middle of active development.

3. Typed linting: you rely on type-aware rules via `parserOptions.project` and per-file overrides. Flat Config supports typed rules but you'll need to translate the scoped `parserOptions.project` usage to the new config API — ensure `tsconfigRootDir` is set when using project-based parsing.

4. Editor/CI changes: editors and CI runners may need a restart or updated ESLint extension settings to pick up the new Flat Config filename and API.

5. Test environment: add Vitest test overrides (`env: { vitest: true }`) or use `plugin:vitest/recommended` if you install that plugin to avoid spurious rule failures in tests.

Recommended migration approach:

- Step 1: Upgrade devDependencies to ESLint 9-compatible versions but keep the legacy config file. Run lint and fix all issues.
- Step 2: Create `eslint.config.cjs` in a branch, port rules and overrides incrementally, and run ESLint in CI to see the differences.
- Step 3: Update editor settings and inform contributors. Merge when green.

If you'd like, I can perform Step 1 now (upgrade devDependencies conservatively) or proceed with a full Flat Config migration in a follow-up. Tell me which you'd prefer.
