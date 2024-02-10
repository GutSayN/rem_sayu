module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{cs,jpeg,js,html,json,png}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};