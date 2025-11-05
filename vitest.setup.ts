// Recommended test setup for React + TypeScript + Vitest
import "@testing-library/jest-dom";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// Automatically cleanup DOM after each test to avoid cross-test leakage
afterEach(() => {
  cleanup();
});
