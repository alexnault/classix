// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import parser from "@typescript-eslint/parser";
import plugin from "@typescript-eslint/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    // https://github.com/eslint/eslint/issues/17930#issuecomment-1872947672
    ignores: ["node_modules/*", "dist/*", "coverage/*"],
  },
  {
    languageOptions: {
      parser: parser,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": plugin,
    },
    rules: {},
    ignores: ["node_modules/*", "dist/*", "coverage/*"],
  },
];
