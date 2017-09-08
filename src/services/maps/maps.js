/* globals google */

'use strict';

(function(){

	angular.module('services.maps', [])

	.factory('mapsService', function(
		$document,
		$timeout
	){

		var getObj = function(id){
			return {
				ready: false,
				loading: false,
				error: false,
				position: {
					lat: 0,
					lng: 0
				},
				id: id,
				mapObj: null,
				marker: null
			};
		};

		var setObjLocationPosition = function(obj,coords){
			obj.position = {
				lat: coords.latitude,
				lng: coords.longitude
			};
		};

		var setStatus = function(obj, status){
			angular.extend(obj, status);
		};

		var initGoogleMaps = function(obj){

			if(!obj.mapObj){
				obj.mapObj = new google.maps.Map(
					$document[0].querySelector('#' + obj.id),
					{
						zoom: 16
					}
				);
			}

			obj.mapObj.setCenter(obj.position);
		};

		var setMarker = function(obj){
			if(!obj.marker){
				obj.marker = new google.maps.Marker({
					position: obj.position,
					map: obj.mapObj
				});
			}else{
				obj.marker.setPosition(obj.position);
			}
		};

		var showLocationOnMap = function(obj, data){

			setStatus(
				obj,
				{
					ready: true,
					loading: false,
					error: false
				}
			);

			$timeout(function(){

				setObjLocationPosition(
					obj,
					{
						latitude: data.coords.latitude,
						longitude: data.coords.longitude
					}
				);

				initGoogleMaps(obj);

				setMarker(obj);

			},0);

		};

		var getLocationError = function(obj){

			$timeout(function(){
				setStatus(
					obj,
					{
						ready: false,
						loading: false,
						error: true
					}
				);
			},0);

		};

		var factory = {
			getObj: getObj,
			setStatus: setStatus,
			showLocationOnMap: showLocationOnMap,
			getLocationError: getLocationError
		};

		return factory;

	});

})();
