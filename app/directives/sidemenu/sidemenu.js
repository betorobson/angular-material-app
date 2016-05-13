
'use strict';

(function(){

	var app = angular.module('directives.sidemenu',[

		]);

	app.controller('SideMenuCtrl', [
		'$scope', '$timeout', '$mdSidenav', '$log',
		function($scope, $timeout, $mdSidenav, $log) {

			$scope.sideMenuItems = [
				{
					label: 'Home',
					icon: 'home.svg',
					go: 'home',
				},
				{
					label: 'Mapa e GPS',
					icon: 'place.svg',
					go: 'maps',
				},
				{
					label: 'Camera',
					icon: 'camera.svg',
					go: 'picture',
				},
				{
					label: 'Galeria',
					icon: 'insert_photo.svg',
					go: 'gallery',
				},
				{
					label: 'View 1',
					icon: 'card_travel.svg',
					go: 'view1',
				}
			];

			$scope.settings = [
				{
					name: 'Notificações',
					icon: 'notifications.svg',
					enabled: true
				}
			];
			$scope.getIcon = function(item){
				return 'assets/icons/' + item.icon;
			};

			$scope.close = function () {
				$mdSidenav('sidemenu').close()
					.then(function () {
						$log.debug('close side menu is done');
					});
			};

		}
	]);

	app.directive('sideMenu', function(){
		return {
			restrict: 'E',
			templateUrl: 'app/directives/sidemenu/sidemenu.html',
			controller: 'SideMenuCtrl'
		};
	});

})();
