
var server = require('pushstate-server');

var getURL = function(modules){

	var port = Number(process.env.PORT || 8083);

	return {

		port: port,

		url: 'http://localhost:' + port + '/'

	};

};

module.exports = function(gulp, modules){

	var url = getURL(modules);

	gulp.task('openBrowser', function(){

		setTimeout(function(){
			return gulp.src(__filename)
				.pipe(modules.gopen({uri: url.url}));
		}, 3000);

	});

	return function(cb){

		console.log(
			modules.colors.info,
			'Serving files on ' + url.url
		);

		return server.start({
			port: url.port,
			directory: './' + (modules.config.dev ? 'debug' : 'build')
		});

	};
};
