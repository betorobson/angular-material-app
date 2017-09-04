
module.exports = function(gulp, modules){

	var globMatchFiles = ['src/index.html'];

	modules.watchTasks.push('index:watch');
	gulp.task('index:watch', function(){

		return gulp.watch(globMatchFiles,
			{
				interval: 1000
			},
			function(event){
				modules.watchConsoleMessage(event);
				gulp.start('index');
			}
		);

	});

	return function(){

		var data = {
			config: modules.config
		};

		return gulp.src(globMatchFiles)
			.pipe(modules.handlebars(data))
			.pipe(gulp.dest(modules.config.getDirDest()));
	};
};
