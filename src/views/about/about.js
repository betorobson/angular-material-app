
'use strict';

(function(){

	angular.module('views.about',[])

	.controller(
		'ViewAboutController',

		function(
			path,
			navigationBarFactory
		){

			path.setCurrent('about');

			navigationBarFactory.setTitle(path.getCurrent().label);

		}
	);

})();
