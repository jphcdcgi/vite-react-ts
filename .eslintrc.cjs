module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    // Encourage explicit return types on exported functions for library code
    "@typescript-eslint/explicit-module-boundary-types": "off",
    // Allow 'any' sparingly but keep eslint rule enabled for safety
    "@typescript-eslint/no-explicit-any": "warn",
  },
  overrides: [
    {
      files: ["vite.config.ts", "vitest.config.ts"],
      parserOptions: {
        project: ["./tsconfig.node.json"],
        tsconfigRootDir: __dirname,
      },
      env: { node: true },
    },
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
      },
    },
  ],
};
