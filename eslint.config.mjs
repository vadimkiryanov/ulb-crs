import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import i18next from "eslint-plugin-i18next";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,

	{
		plugins: {
			"react-hooks": reactHooksPlugin,
			i18next,
		},
		settings: {
			react: {
				version: "detect", // Для определения нужной версии React
			},
		},

		rules: {
			"i18next/no-literal-string": ["error", { markupOnly: true }],
			"react/react-in-jsx-scope": "off",
			"@typescript-eslint/no-unused-vars": "warn",
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "warn",
			// "react/jsx-indent": [2, 4],
		},
	},
];
