var gulp = require('gulp');
var Server = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('test', function () {

	new Server({
		configFile: __dirname + '/../karma.conf.js',
		singleRun: true
	}).start();

});
