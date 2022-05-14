module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	// extends: [
	//   'plugin:react/recommended',
	//   'airbnb',
	// ],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "unused-imports"],
	rules: {
		"react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
		"no-unused-vars": "off",
		"unused-imports/no-unused-imports": "error",
		"unused-imports/no-unused-vars": [
			"warn",
			{
				vars: "all",
				varsIgnorePattern: "^_",
				args: "after-used",
				argsIgnorePattern: "^_",
			},
		],
	},
	settings: {
		"import/resolver": {
			node: {
				paths: ["src"],
			},
		},
	},
};
