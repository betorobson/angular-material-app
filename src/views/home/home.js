
'use strict';

(function(){

	angular.module('views.home',[])

	.controller(
		'ViewHomeController',

		function(
			path,
			navigationBarFactory
		){

			path.setCurrent('home');

			navigationBarFactory.setTitle(path.getCurrent().label);

		}
	);

})();
