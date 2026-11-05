import { defineConfig } from "rolldown";

export default defineConfig({
  input: "src/index.ts",
  output: [
    {
      file: "dist/cjs/classix.js",
      format: "cjs",
      exports: "named",
      minify: true,
      // Don't emit Symbol.toStringTag. Keep esModule so CJS default imports work.
      generatedCode: { symbols: false },
    },
    {
      file: "dist/esm/classix.mjs",
      format: "es",
      minify: true,
    },
  ],
});
