
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
		'views.maps',
		'views.view1'

	]);

	app.config(
		
		function(
			$routeProvider,
			$mdThemingProvider
		){

			// theme
			$mdThemingProvider.theme('default')
				.primaryPalette('blue-grey');

			// routes
			$routeProvider

				.when('/home/', {
					templateUrl: 'app/views/home/home.html',
					controller: 'HomeCtrl as home'
				})

				.when('/maps/', {
					templateUrl: 'app/views/maps/maps.html',
					controller: 'MapsCtrl as maps'
				})

				.when('/view1/', {
					templateUrl: 'app/views/view1/view1.html',
					controller: 'View1Ctrl as view1'
				})

				.otherwise({redirectTo: '/home/'});

		}
	);

})();
