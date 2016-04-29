'use strict';

(function(){
	var app = angular.module('views.view1', []);

	app.controller('View1Ctrl', 
		function(
			$scope,
			$rootScope,
			$timeout,
			navigationBarService
		){

			$rootScope.sideMenuActivedItem = 'view1';

			navigationBarService.setBackButton(true);
			navigationBarService.setTitle('View 1');

			var rightButtonMore = {
				icon: 'assets/icons/more_vert.svg',
				func: function(){}
			};

			var rightButtonStar = {
				checked: false,
				icon: 'assets/icons/star_border.svg',
				func: function(){
					if(rightButtonStar.checked)
						rightButtonStar.icon = 'assets/icons/star_border.svg';
					else
						rightButtonStar.icon = 'assets/icons/star.svg';
					rightButtonStar.checked = !rightButtonStar.checked;
				}
			};

			var setNavigationBarRightButtons = function(){
				navigationBarService.rightButtons = [
					rightButtonStar,
					rightButtonMore
				];
			};

			$scope.$on(
				'$viewContentLoaded',
				function(){
					$timeout(setNavigationBarRightButtons, 0);
				}
			);

			$scope.$on(
				'$destroy',
				function(){
					$timeout(function(){
						$scope.navigationBarService.rightButtons = false;
					}, 0);
				}
			);

		}
	);

})();
