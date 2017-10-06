// Karma configuration
// Generated on Fri Sep 08 2017 23:37:08 GMT-0300 (-03)

module.exports = function(config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],

		// list of files / patterns to load in the browser
		files: [

			'bower_components/angular/*.min.js',
			'bower_components/angular-route/*.min.js',
			'bower_components/angular-messages/*.min.js',
			'bower_components/angular-animate/*.min.js',
			'bower_components/angular-aria/angular-aria.min.js',
			'bower_components/angular-material/angular-material.min.js',

			'bower_components/angular-mocks/angular-mocks.js',
			'bower_components/angular-material/angular-material-mocks.js',

			'src/app.js',
			'src/config/*.js',
			'src/**/!(*.config).js',
			'src/**/*.config.js',
			'src/**/*.run.js',
			'src/**/*.spec.js'

			// 'src/**/*.html',

		],

		// list of files to exclude
		exclude: [
		],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			// 'src/views/**/*.html': ['ng-html2js'],
			// 'src/directives/**/*.html': ['ng-html2js']
		},

		proxies: {
			'/assets/': '/assets/'
		},

		ngHtml2JsPreprocessor: {
			// If your build process changes the path to your templates,
			// use stripPrefix and prependPrefix to adjust it.
			stripPrefix: [
				'src/directives/'
			],
			//prependPrefix: "web/path/to/templates/",

			// the name of the Angular module to create
			moduleName: 'uiChallengeApp'
		},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress'],

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS'],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity

	});
};
