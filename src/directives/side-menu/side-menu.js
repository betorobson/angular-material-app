
'use strict';

(function(){

	angular.module('directives.side-menu',[
		'factories.side-menu'
	])

	.controller(
		'SideMenuCtrl',
		function(
			$scope,
			$mdSidenav,
			$timeout,
			sideMenuFactory,
			path
		){

			sideMenuFactory.setScope($scope);

			$scope.componentId = sideMenuFactory.getId();

			$scope.toggleSideMenu = sideMenuFactory.toggle;

			$scope.sideMenuItens = sideMenuFactory.getSideMenuItems();

			$scope.closeSideMenu = function () {
				$mdSidenav($scope.componentId).close()
					.then(function() {
						console.log('close side menu is done');
					});
			};

			$scope.isSideMenuItemActive = function(item){
				if(path.getCurrent() == item){
					return {background: 'primary-100'};
				}
				return {};
			};

		}
	)

	.directive('sideMenu', function(){
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'side-menu/side-menu.html',
			controller: 'SideMenuCtrl'
		};
	});

})();
