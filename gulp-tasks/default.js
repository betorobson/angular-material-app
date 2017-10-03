
module.exports = function(gulp, modules){

	return function(callback){
		modules.runSequence(
			'javascript',
			'sass',
			'libCSS',
			'assets',
			'indexHTML'
		)(callback);
	};

};
