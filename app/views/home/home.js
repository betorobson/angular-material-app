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

			$scope.grid = 100;

			$scope.items = [
				{
					title: 'Title 1',
					subhead: 'subhead 1',
					icon: 'giftcard',
					img: 'img1.jpg',
					headline: 'Headline card',
					description: 'Card description'
				},
				{
					title: 'Title 2',
					subhead: 'subhead 2',
					icon: 'giftcard',
					img: 'img2.jpg',
					headline: 'Headline card',
					description: 'Card description'
				},
				{
					title: 'Title 3',
					subhead: 'subhead 3',
					icon: 'giftcard',
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
					icon: 'giftcard',
					img: 'img5.jpg',
					headline: 'Headline card',
					description: 'Card description'
				},
				{
					title: 'Title 6',
					subhead: 'subhead 6',
					icon: 'giftcard',
					img: 'img6.jpg',
					headline: 'Headline card',
					description: 'Card description'
				}
			];

		}
	);

})();
