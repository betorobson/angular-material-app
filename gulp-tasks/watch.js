

module.exports = function(gulp, modules){

	modules.watchConsoleMessage = function(e){
		console.log('[watch] ' + e.type + ' -> ' + e.path);
	};

	gulp.task('startWatch', function(){
		return gulp.start(modules.watchTasks);
	});

	return function(callback){
		modules.runSequence(
			'default',
			'startWatch',
			['webserver','openBrowser']
		)(callback);
	};

};
