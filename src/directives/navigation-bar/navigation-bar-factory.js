
'use strict';

(function(){

	angular.module('factories.navigation-bar', [])

	.factory('navigationBarFactory', function(){

		var title = 'nav bar title';

		var getTitle = function(){
			return title;
		};

		var setTitle = function(newTitle){
			title = newTitle;
		};

		var factory = {

			getTitle: getTitle,
			setTitle: setTitle

		};

		return factory;
	});

})();
