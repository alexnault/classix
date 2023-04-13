import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "c8",
      reporter: ["lcov", "text"],
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
});
