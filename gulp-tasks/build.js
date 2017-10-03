
module.exports = function(gulp, modules){
	return function(){

		modules.config.dev = false;

		return gulp.start('default');

	};
};
