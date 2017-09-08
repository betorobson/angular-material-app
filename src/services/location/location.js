
'use strict';

(function(){

	angular.module('services.location', [])

	.factory('locationService', function(){

		var requestLocation = function(attrs){

			if(navigator.geolocation){
				navigator.geolocation.getCurrentPosition(
					attrs.success,
					attrs.error
				);
			} else {
				attrs.error();
			}

		};

		var factory = {

			getLocation: function(attrs){
				requestLocation(attrs);
			}

		};

		return factory;

	});

})();
