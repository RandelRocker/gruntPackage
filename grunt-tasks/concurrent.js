module.exports = {
	options: {
		logConcurrentOutput: true,
		limit: 10
	},
	build: {
		tasks: ['less:main', 'jade:main', 'jade:templates', 'jshint:main', 'copy:main', 'copy:fav', 'requirejs']
	},
	watch: {
		tasks: ['watch:css', 'watch:html', 'watch:templates', 'watch:js', 'watch:livereload']
	},
	run: {
		tasks: ['concurrent:watch', 'connect:main']
	}
};