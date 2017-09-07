
'use strict';

(function(){

	// properties

	var view = 'home';
	var controller = 'ViewHomeController';

	var route = {
		templateUrl: view + '/' + view + '.html',
		controller: controller,
	};

	var configPath = {
		path: '/home/',
		label: 'Home',
		icon: 'home.svg',
		sideMenu: true
	};

	// config

	angular.module('views.' + view)

	.config(function(
		$routeProvider,
		$locationProvider,
		pathProvider
	){

		var pathObj = pathProvider.addPath(
			view,
			configPath
		);

		var path = pathObj.path;

		$routeProvider

			.when(
				path,
				route
			)

			.otherwise({
				redirectTo: path
			})

		;

	});

})();
