'use strict';

(function(){
	var app = angular.module('views.picture', []);

	app.controller('PictureCtrl', 
		function(
			$scope,
			$rootScope,
			$timeout,
			navigationBarService
		){

			$rootScope.sideMenuActivedItem = 'picture';

			navigationBarService.setBackButton(true);
			navigationBarService.setTitle('View 1');

			$scope.pictureCSS = {
				'background-size': 'cover',
				'background-position': 'center'
			};

			var cameraSuccess = function(photoURI){

				console.log(photoURI);

				$timeout(function(){
				$scope.pictureCSS['background-image'] = 
					'url(' + photoURI + ')';
				}, 0);

			};

			var cameraFail = function(){

			};

			var rightButtonCamera = {
				icon: 'assets/icons/camera.svg',
				func: function(){
					if(navigator.camera){
						navigator.camera.getPicture(
							cameraSuccess,
							cameraFail,
							{
								quality: 85,
								destinationType: Camera.DestinationType.FILE_URI,
								targetHeight: 380
							}
						);						
					}
				}
			};

			var setNavigationBarRightButtons = function(){
				navigationBarService.rightButtons = [
					rightButtonCamera,
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
