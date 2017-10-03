
'use strict';

(function(){

	angular.module('directives.navigation-bar',[
		'factories.navigation-bar',
		'factories.side-menu'
	])

	.controller('NavigationBarCtrl',

		function(
			$scope,
			navigationBarFactory,
			sideMenuFactory
		){

			sideMenuFactory;

			$scope.navigationBarTitle = navigationBarFactory.getTitle;

			$scope.toggleSideMenu = function(){

				sideMenuFactory.toggle();

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
