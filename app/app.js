
'use strict';

(function(){

	var app = angular.module('angularMaterialApp', [

		// libs
		'ngRoute',
		'ngMaterial',
		'ngMessages',

		// directives
		'directives.mainController',
		'directives.sidemenu',
		'directives.navigation-bar',

		'views.home',
		'views.view1'

	]);

	app.config(
		
		function(
			$routeProvider,
			$mdThemingProvider
		){

			$mdThemingProvider.theme('default')
				.primaryPalette('blue-grey');

			$routeProvider

				.when('/home/', {
					templateUrl: 'app/views/home/home.html',
					controller: 'HomeCtrl as home'
				})

				.when('/view1/', {
					templateUrl: 'app/views/view1/view1.html',
					controller: 'View1Ctrl as view1'
				})

				.otherwise({redirectTo: '/home/'});

		}
	);

})();
