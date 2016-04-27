'use strict';

(function(){
	var app = angular.module('views.view1', []);

	app.controller('View1Ctrl', [
		'$scope',
		'$rootScope',
		'navigationBarService',
		function(
			$scope,
			$rootScope,
			navigationBarService
		){

			$rootScope.sideMenuActivedItem = 'view1';

			navigationBarService.setBackButton(true);
			navigationBarService.setTitle('View 1');

		}
	]);

})();
