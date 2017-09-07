
'use strict';

(function(){

	angular.module('uiChallengeApp', [

		// libs
		'ngRoute',
		'ngAnimate',
		'ngMessages',
		'ngMaterial',

		// services
		// 'services.get-location',

		// providers
		'provider.path',

		// directives
		'directives.mainController',
		'directives.navigation-bar',
		'directives.side-menu'

		// views
		// 'views.home'

	])

	.config(function($mdThemingProvider){
	  $mdThemingProvider.theme('default')
	    .primaryPalette('teal')
	    .accentPalette('orange');
	})

	;

})();
