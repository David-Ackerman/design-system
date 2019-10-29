module.exports = {
	extends: [
		'norton',
	],
	overrides: [
		{
			files: [
				'**/{tasks,test}/*.{js,jsx}',
				'**/rollup.config.js',
				'**/gulpfile?(.babel).js',
			],
			rules: {
				'import/no-extraneous-dependencies': 'off',
			},
		},
	],
};