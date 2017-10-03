module.exports = function(gulp, modules){

	var globMatchFiles = [
		'assets/**/*'
	];

	gulp.task('assetsClean', function(){
		return modules.del([
			modules.config.getDirDest() + '/assets/**'
		]);
	});

	modules.watchTasks.push('assets:watch');
	gulp.task('assets:watch', function(){

		gulp.watch(globMatchFiles,
			{
				interval: 1000
			},
			function(event){
				modules.watchConsoleMessage(event);
				gulp.start('assets');
			}
		);

	});

	gulp.task('assetsBuild', function(){
		return gulp.src(globMatchFiles)
			.pipe(gulp.dest(modules.config.getDirDest() + '/assets/'));
	});

	return function(callback){
		modules.runSequence(
			'assetsClean',
			'assetsBuild'
		)(callback);
	};

};
