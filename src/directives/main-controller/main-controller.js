
'use strict';

(function(){

	angular.module('directives.mainController',[])

	.controller(
		'MainController',

		function(
			$rootScope,
			$scope,
			$location,
			$element,
			path
		){

			// redirect between views
			// used by ng-click
			var go = function(view, replace){
				if(replace)
					$location.path(view).replace();
				else
					$location.path(view);
			};

			console.log('main-controller');

			// automatically invoked by provider.path.setCurrent(name)
			// do NOT call it by yourself
			var setViewAttribute = function(){

				$($element).attr(
					'view',
					path.getCurrentViewName()
				);

				$scope.mainController.currentView = path.getCurrentViewName();

			};

			// hold all main controller communication
			$scope.mainController = {
				go: go,
				currentView: null,
				setViewAttribute: setViewAttribute
			};

		}
	)

	.directive('mainController', function(){
		return {
			restrict: 'E',
			templateUrl: 'main-controller/main-controller.html',
			controller: 'MainController'
		};
	});

})();
