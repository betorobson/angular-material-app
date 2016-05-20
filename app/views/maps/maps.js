/* globals google, console */
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
			var mapKey = 'AIzaSyC9Z-ItAQRhxdX3sKtQInQOW7L_lGChs6s';
			var marker;
			var showMaps = function(){
				
				var myLatLng = {lat: -23.542751, lng: -46.601214};

				if(window.googleMapsLoaded){
					map = new google.maps.Map(document.getElementById('map'), {
						zoom: 16,
						center: myLatLng
					});
				}else{
					loadGoogleMapsJavascriptAPI();
				}

			};

			var loadGoogleMapsJavascriptAPI = function(){

				if(!window.googleMapsLoaded){

					var s = document.createElement('script');

					s.onload = function(){
						window.googleMapsLoaded = true;
						$timeout(function(){showMaps();}, 0);
					};

					s.onerror = function(){
						console.log('Error loading Google Maps Javascript API');
					}; 

					s.src='https://maps.googleapis.com/maps/api/js?key=' + mapKey;
					document.querySelector('head').appendChild(s);					

				}else{
					$timeout(function(){showMaps();}, 0);
				}

			};

			var setCurrentPositionOnMap = function(position){

				console.log(position);

				$timeout(function(){
						var pos = {
							lat: position.coords.latitude,
							lng: position.coords.longitude
						};

						if(map){
							map.setCenter(pos);

							if(!marker)
								marker = new google.maps.Marker({
									position: pos,
									map: map,
									title: 'My location'
								});
							else
								marker.setPosition(pos);
						}
				}, 0);

			};

			var rightButton = {
				icon: 'assets/icons/gps.svg',
				func: function(){
					navigator.geolocation.getCurrentPosition(setCurrentPositionOnMap);
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
