
'use strict';

(function(){

	angular.module('views.home',[])

	.controller(
		'ViewHomeController',

		function(
			path
		){

			path.setCurrent('home');

		}
	);

})();
