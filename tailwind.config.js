module.exports = {
	purge: {
		mode: 'all',
		preserveHtmlElements: false,
		content: ['./src/**/*.svelte', './src/**/*.html'],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		empty: ['after'],
		extend: {
			display: ['after'],
			clear: ['after'],
		},
	},
	plugins: [
		require('tailwindcss-pseudo')({
			empty: true, // defaults to true
		}),
	],
};
