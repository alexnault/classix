import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import { terser } from "rollup-plugin-terser";
import type { RollupOptions } from "rollup";

const config: RollupOptions[] = [
  {
    input: "src/index.ts",
    plugins: [esbuild(), terser()],
    output: [
      {
        file: `dist/cjs/classix.js`,
        format: "cjs",
        exports: "named",
        strict: false, // Don't emit "use strict" in output
      },
      {
        file: `dist/esm/classix.mjs`,
        format: "es",
      },
    ],
  },
  {
    input: "src/index.ts",
    plugins: [dts()],
    output: {
      file: `dist/classix.d.ts`,
      format: "es",
    },
  },
];

export default config;
