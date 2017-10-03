
'use strict';

(function(){

	// properties

	var view = 'location';
	var controller = 'ViewLocationController';

	var route = {
		templateUrl: view + '/' + view + '.html',
		controller: controller,
	};

	var configPath = {
		path: '/location/',
		label: 'Get location',
		icon: 'location.svg',
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

		$routeProvider

			.when(
				pathObj.path,
				route
			)

		;

	});

})();
