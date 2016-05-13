'use strict';

(function(){
	var app = angular.module('views.maps', []);

	app.controller('MapsCtrl', 
		function(
			$scope,
			$rootScope,
			$timeout,
			navigationBarService
		){

			$rootScope.sideMenuActivedItem = 'maps';

			navigationBarService.setBackButton(true);
			navigationBarService.setTitle('Mapa e GPS');

			var map;
			var marker;
			var showMaps = function(){
			  var myLatLng = {lat: -23.542751, lng: -46.601214};

			  map = new google.maps.Map(document.getElementById('map'), {
			    zoom: 16,
			    center: myLatLng
			  });

			};

			var rightButton = {
				icon: 'assets/icons/gps.svg',
				func: function(){
					navigator.geolocation.getCurrentPosition(function(position){

						console.log(position);

						var pos = {
							lat: position.coords.latitude,
							lng: position.coords.longitude
						};

						map.setCenter(pos);

						if(!marker)
						  marker = new google.maps.Marker({
						    position: pos,
						    map: map,
						    title: 'My location'
						  });
						else
							marker.setPosition(pos);

					});
				}
			};

			var setNavigationBarRightButtons = function(){
				navigationBarService.rightButtons = [rightButton];				
			};

			$scope.$on(
				'$viewContentLoaded',
				function(){
					$timeout(function(){
						showMaps();
						setNavigationBarRightButtons();
					}, 0);
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
