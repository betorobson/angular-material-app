
'use strict';

(function(){

	angular.module('directives.navigation-bar',[
		'factories.navigation-bar'
	])

	.controller('NavigationBarCtrl',

		function(
			$scope,
			navigationBarFactory
		){

			$scope.navigationBarTitle = navigationBarFactory.getTitle;

			$scope.toggleSideMenu = function(){

				console.log('toggleSideMenu');

			};

		}
	)

	.directive('navigationBar', function(){
		return {
			restrict: 'E',
			templateUrl: 'navigation-bar/navigation-bar.html',
			controller: 'NavigationBarCtrl',
		};
	});

})();
