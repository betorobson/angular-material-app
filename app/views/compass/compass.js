'use strict';

(function(){
	var app = angular.module('views.compass', []);

	app.controller('CompassCtrl', 
		function(
			$scope,
			$rootScope,
			$timeout,
			$sce,
			navigationBarService
		){

			$rootScope.sideMenuActivedItem = 'compass';

			navigationBarService.setBackButton(true);
			navigationBarService.setTitle('Bússola');
			navigationBarService.rightButtons = false;

			$scope.heading = '';
			$scope.css = {};

			var onSuccess = function(heading) {
					$timeout(function(){

						$scope.heading = $sce.trustAsHtml(
							'Heading: ' + heading.magneticHeading
						);

						$scope.css = {
							transform: 'rotate(' + Math.round(360 - heading.magneticHeading) + 'deg)'
						};

					},0);
			};

			var onError = function(error) {
				$scope.heading = $sce.trustAsHtml('onError! ' + error);
			};

			var watchID;

			var watchHeading = function(){
				watchID = navigator.compass.watchHeading(
					onSuccess,
					onError,
					{
						frequency: 300
					}
				);				
			};

			$scope.$on(
				'$viewContentLoaded',
				function(){
					$timeout(function(){
						watchHeading();
					}, 0);
				}
			);

			$scope.$on(
				'$destroy',
				function(){
					$timeout(function(){
						navigator.compass.clearWatch(watchID);
					}, 0);
				}
			);

		}
	);

})();
