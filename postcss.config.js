const mode = process.env.NODE_ENV;
const dev = mode === 'development';

module.exports = {
	plugins: [
		require('postcss-import'),
		require('tailwindcss'),
		require('postcss-preset-env')({
			stage: 1,
			features: {
				// enable nesting
				'nesting-rules': true,
			},
		}),

		!dev &&
			require('cssnano')({
				preset: [
					'default',
					{
						discardComments: {
							removeAll: true,
						},
					},
				],
			}),
	],
};
