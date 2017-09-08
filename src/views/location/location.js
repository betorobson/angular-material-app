
'use strict';

(function(){

	angular.module('views.location',[
		'services.location',
		'services.maps',
		'services.freegeoip'
	])

	.controller(
		'ViewLocationController',

		function(
			$scope,
			$timeout,
			$document,
			path,
			navigationBarFactory,
			locationService,
			mapsService,
			freegeoipService
		){

			path.setCurrent('location');

			navigationBarFactory.setTitle(path.getCurrent().label);

			$scope.userMap = mapsService.getObj('userMap');

			$scope.websiteMap = mapsService.getObj('websiteMap');

			$scope.websiteMapModel = {};

			$scope.getLocation = function(){

				mapsService.setStatus(
					$scope.userMap,
					{
						ready: false,
						loading: true,
						error: false
					}
				);

				locationService.getLocation({
					success: function(data){
						mapsService.showLocationOnMap($scope.userMap, data);
					},
					error: function(){
						console.error('location is not available');
						mapsService.getLocationError($scope.userMap);
					}
				});

			};

			$scope.getWebsiteLocation = function(){

				mapsService.setStatus(
					$scope.websiteMap,
					{
						ready: false,
						loading: true,
						error: false
					}
				);

				freegeoipService.get({
					model: $scope.websiteMapModel,
					success: function(response){
						var position = {
							coords: {
								latitude: response.data.latitude,
								longitude: response.data.longitude
							}
						};
						mapsService.showLocationOnMap($scope.websiteMap, position);
					},
					error: function(){
						console.error('location is not available');
						mapsService.getLocationError($scope.websiteMap);
					}
				});

			};

		}
	);

})();
