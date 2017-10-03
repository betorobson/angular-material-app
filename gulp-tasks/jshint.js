
module.exports = function(gulp, modules){
	return function(){

		return gulp.src(['src/**/*.js'])
			.pipe(modules.jshint())
			.pipe(modules.jshint.reporter('default'))
			.pipe(modules.jshint.reporter('fail'));

	};
};
