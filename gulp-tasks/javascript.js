
module.exports = function(gulp, modules){

	var globMatchFilesSrc = [
		'src/app.js',
		'src/config/*.js',
		'src/**/!(*.config).js', // select modules declarations first
		'src/**/*.config.js', // select modules config
		'src/**/*.run.js', // select modules run
		'!src/**/*.spec.js' // exclude spec test files
	];

	var globMatchFilesAngularTemplates = [
		'src/views/**/*.html',
		'src/directives/**/*.html'
	];

	var globMatchFilesLibs = [
		'bower_components/angular/*.min.js',
		'bower_components/angular-route/*.min.js',
		'bower_components/angular-messages/*.min.js',
		'bower_components/angular-animate/*.min.js',
		'bower_components/angular-aria/angular-aria.min.js',
		'bower_components/angular-material/angular-material.min.js'
	];

	gulp.task('javascriptClean', function(){
		return modules.del([modules.config.getDirDest() + '/js/**']);
	});

	modules.watchTasks.push('javascript:watch');
	gulp.task('javascript:watch', function(){

		gulp.watch([].concat(
				globMatchFilesSrc,
				globMatchFilesAngularTemplates,
				globMatchFilesLibs
			),
			{
				interval: 1000
			},
			function(event){
				modules.watchConsoleMessage(event);
				gulp.start('javascript');
			}
		);

	});

	gulp.task('javascriptLibsBuild', function(){

		// concat lib files
		gulp.src(globMatchFilesLibs)
			// log matched files
			// .pipe(modules.gulpDebug({title: 'javascriptLibFiles'}))
			.pipe(modules.concat('libs.min.js'))
			.pipe(modules.stripComments())
			.pipe(gulp.dest(modules.config.getDirDest() + '/js/'));

	});

	gulp.task('javascriptSrcBuild', function(){

		// concat source files
		gulp.src(globMatchFilesSrc)

			// log matched files
			// .pipe(modules.gulpDebug({title: 'javascriptSrcBuild'}))

			// init sourcemaps
			.pipe(
				!modules.config.dev ? modules.gutil.noop() : modules.sourcemaps.init()
			)

			// compress js for production
			.pipe(modules.config.dev ?
				modules.gutil.noop()
				:
				modules.uglify({mangle: false})
			)

			// remove js logs for production
			.pipe(modules.config.dev ? modules.gutil.noop() : modules.strip())

			.pipe(modules.concat('app.min.js'))

			// write sourcemaps
			.pipe(!modules.config.dev ?
				modules.gutil.noop()
				:
				modules.sourcemaps.write('maps')
			)

			.pipe(gulp.dest(modules.config.getDirDest() + '/js/'));

	});

	gulp.task('javascriptAngularTemplates', function(){

		// compile angular templates
		gulp.src(globMatchFilesAngularTemplates)
			.pipe(modules.templateCache({
				module:'uiChallengeApp',
				filename: 'templates.min.js'
			}))
			.pipe(gulp.dest(modules.config.getDirDest() + '/js/'));

	});

	return function(callback){
		modules.runSequence(
			'javascriptClean',
			'javascriptLibsBuild',
			'javascriptSrcBuild',
			'javascriptAngularTemplates'
		)(callback);
	};

};
