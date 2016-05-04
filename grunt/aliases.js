module.exports = {
	'default': [
		'styles',
		'scripts',
		'notify:default'
	],
	'styles': [
		'copy:fontawesome',
		'sass',
		'postcss:dev',
		'cssjanus',
		'notify:styles'
	],
	'scripts': [
		'jshint',
		'concat',
		'modernizr',
		'notify:scripts'
	],
	'build': [
		'clean',
		'copy:fontawesome',
		'sass',
		'postcss:build',
		'cssjanus',
		'scripts',
		'copy:build',
		'compress',
		'notify:build'
	],
	'bs-watch': [
		'browserSync',
		'watch'
	]
};
