import { defineConfig } from "tsdown";

export default defineConfig({
  entry: { classix: "src/index.ts" },
  minify: true,
  dts: true,
  format: {
    cjs: {
      outDir: "dist/cjs",
      outExtensions: () => ({ js: ".js", dts: ".d.ts" }),
      // Don't emit Symbol.toStringTag. Keep esModule so CJS default imports work.
      outputOptions: { exports: "named", generatedCode: { symbols: false } },
    },
    esm: { outDir: "dist/esm" },
  },
});
