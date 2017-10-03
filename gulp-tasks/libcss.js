
module.exports = function(gulp, modules){

	var globMatchFiles = [
		'bower_components/**/reset.min.css',
		'bower_components/**/angular-material.min.css'
	];

	gulp.task('libcssClean', function(){
		return modules.del([
			modules.config.getDirDest() + '/css/lib/**'
		]);
	});

	modules.watchTasks.push('libCSS:watch');
	gulp.task('libCSS:watch', function(){

		gulp.watch(globMatchFiles,
			{
				interval: 1000
			},
			function(event){
				modules.watchConsoleMessage(event);
				gulp.start('libCSS');
			}
		);

	});

	gulp.task('libCSSBuild', function(){

		return gulp.src(globMatchFiles)
			.pipe(modules.concat('libs.min.css'))
			.pipe(gulp.dest(modules.config.getDirDest() + '/css/lib/'));

	});

	return function(callback){
		modules.runSequence(
			'libcssClean',
			'libCSSBuild'
		)(callback);
	};

};
