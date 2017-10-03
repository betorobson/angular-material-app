//* global require */

'use strict';

var gulp = require('gulp');

var config = require('./config.js');

var colors = {
	'warn': '\x1b[35m',
	'error': '\x1b[31m',
	'log': '\x1b[2m',
	'info': '\x1b[33m'
};

var modules = {
	config : config,
	colors : colors,
	watchTasks: [],
	del : require('del'),
	eventStream : require('event-stream'),
	templateCache : require('gulp-angular-templatecache'),
	gulpDebug : require('gulp-debug'),
	concat : require('gulp-concat'),
	jshint : require('gulp-jshint'),
	order : require('gulp-order'),
	plumber : require('gulp-plumber'),
	sourcemaps : require('gulp-sourcemaps'),
	strip : require('gulp-strip-debug'),
	stripComments : require('gulp-strip-comments'),
	gopen : require('gulp-open'),
	sass : require('gulp-sass'),
	uglify : require('gulp-uglify'),
	gutil : require('gulp-util'),
	handlebars : require('gulp-compile-handlebars'),
	runSequence : require('gulp-sequence')
};

var getTask = function(task){
	return require('./gulp-tasks/' + task)(gulp, modules);
};

gulp.task('default', getTask('default') );
gulp.task('watch', getTask('watch') );
gulp.task('build', getTask('build') );

gulp.task('jsHint', getTask('jshint') );
gulp.task('javascript', ['jsHint'], getTask('javascript') );

gulp.task('libCSS', getTask('libcss') );

gulp.task('sass', getTask('sass') );

gulp.task('assets', getTask('assets') );

gulp.task('indexHTML', getTask('indexhtml') );

gulp.task('webserver', getTask('webserver') );
