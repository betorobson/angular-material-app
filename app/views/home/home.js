'use strict';

(function(){
	var app = angular.module('views.home', []);

	app.controller('HomeCtrl', [
		'$scope',
		'$rootScope',
		'navigationBarService',
		function(
			$scope,
			$rootScope,
			navigationBarService
		){

			$rootScope.sideMenuActivedItem = 'home';

			navigationBarService.setBackButton(false);
			navigationBarService.setTitle('App Name');

		}
	]);

})();
