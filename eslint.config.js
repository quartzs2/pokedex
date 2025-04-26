import eslintConfigPrettier from "eslint-config-prettier/flat";
import perfectionist from "eslint-plugin-perfectionist";
import reactRefresh from "eslint-plugin-react-refresh";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import globals from "globals";
import js from "@eslint/js";

export default tseslint.config(
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  jsxA11y.flatConfigs.recommended,
  { ignores: ["dist"] },
  {
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/button-has-type": "error",
    },
    plugins: {
      "react-refresh": reactRefresh,
      "react-hooks": reactHooks,
      react,
    },
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2020,
    },

    settings: {
      react: {
        version: "detect",
      },
    },
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
  },
  perfectionist.configs["recommended-line-length"],
  eslintConfigPrettier,
);
