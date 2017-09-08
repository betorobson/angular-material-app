
'use strict';

(function(){

	// properties

	var view = 'about';
	var controller = 'ViewAboutController';

	var route = {
		templateUrl: view + '/' + view + '.html',
		controller: controller,
	};

	var configPath = {
		path: '/about/',
		label: 'About Me',
		icon: 'contact.svg',
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
			);

	});

})();
