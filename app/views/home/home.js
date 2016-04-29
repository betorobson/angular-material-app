'use strict';

(function(){
	var app = angular.module('views.home', []);

	app.controller('HomeCtrl', 
		function(
			$scope,
			$rootScope,
			$timeout,
			navigationBarService
		){

			$rootScope.sideMenuActivedItem = 'home';

			navigationBarService.setBackButton(false);
			navigationBarService.setTitle('App Name');

			var rightButton = {
				icon: 'assets/icons/view_list.svg',
				func: function(){
					
					if($scope.listLayout == 'column'){
						$scope.listLayout = 'row';
						rightButton.icon = 'assets/icons/dashboard.svg';
					}else{
						$scope.listLayout = 'column';
						rightButton.icon = 'assets/icons/view_list.svg';
					}

				}
			};

			var setNavigationBarRightButtons = function(){
				navigationBarService.rightButtons = [rightButton];				
			};

			$scope.listLayout = 'column';

			$scope.items = [
				{
					title: 'Title 1',
					subhead: 'subhead 1',
					icon: 'card_travel',
					img: 'img6.jpg',
					headline: 'Headline card',
					description: 'Card description'
				},
				{
					title: 'Title 2',
					subhead: 'subhead 2',
					icon: 'face',
					img: 'img2.jpg',
					headline: 'Headline card',
					description: 'Card description'
				},
				{
					title: 'Title 3',
					subhead: 'subhead 3',
					icon: 'flight_takeoff',
					img: 'img3.jpg',
					headline: 'Headline card',
					description: 'Card description'
				},
				{
					title: 'Title 4',
					subhead: 'subhead 4',
					icon: 'giftcard',
					img: 'img4.jpg',
					headline: 'Headline card',
					description: 'Card description'
				},
				{
					title: 'Title 5',
					subhead: 'subhead 5',
					icon: 'flight_takeoff',
					img: 'img5.jpg',
					headline: 'Headline card',
					description: 'Card description'
				},
				{
					title: 'Title 6',
					subhead: 'subhead 6',
					icon: 'giftcard',
					img: 'img1.jpg',
					headline: 'Headline card',
					description: 'Card description'
				}
			];

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
