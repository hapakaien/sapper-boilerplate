module.exports = {
	root: true,
	extends: [
		'airbnb-typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:eslint-comments/recommended',
		'plugin:promise/recommended',
		'prettier',
		'prettier/@typescript-eslint',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
	},
	plugins: ['@typescript-eslint', 'svelte3'],
	rules: {
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'import/no-mutable-exports': 0,
		'no-labels': 0,
		'no-restricted-syntax': 0,
	},
	overrides: [
		{
			files: ['**/*.svelte'],
			processor: 'svelte3/svelte3',
		},
	],
};
