
module.exports = function(gulp, modules){

	var globMatchFiles = [
		'src/**/*.scss'
	];

	gulp.task('cssClean', function(){
		return modules.del([
			modules.config.getDirDest() + '/css/*.css'
		]);
	});

	modules.watchTasks.push('sass:watch');
	gulp.task('sass:watch', function(){

		gulp.watch(globMatchFiles,
			{
				interval: 1000
			},
			function(event){
				modules.watchConsoleMessage(event);
				gulp.start('sass');
			}
		);

	});

	gulp.task('sassBuild', function(){

		return gulp.src(
			[].concat(
				globMatchFiles,
				['!src/**/_*.scss']
			)
		)
			.pipe(modules.config.dev ? modules.sourcemaps.init() : modules.gutil.noop() )
			.pipe(modules.concat('app.css'))
			.pipe(modules.sass({
					outputStyle: modules.config.dev ? 'compact' : 'compressed'
				}).on(
					'error',
					modules.sass.logError)
			)
			.pipe(modules.config.dev ? modules.sourcemaps.write('maps') : modules.gutil.noop() )
			.pipe(gulp.dest(modules.config.getDirDest() + '/css'));

	});

	return function(callback){
		modules.runSequence(
			'cssClean',
			'sassBuild'
		)(callback);
	};

};
