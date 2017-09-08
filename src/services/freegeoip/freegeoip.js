
'use strict';

(function(){

	angular.module('services.freegeoip', [])

	.factory('freegeoipService', function(
		$http,
		URLs
	){

		var get = function(attr){

			$http({
				method: 'get',
				url: URLs.freegeoip + attr.model.url
			}).then(
				attr.success,
				attr.error
			);

		};

		var factory = {
			get: get
		};

		return factory;

	});

})();
