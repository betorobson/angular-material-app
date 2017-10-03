
'use strict';

(function(){

	angular.module('directives.mainController',[])

	.controller(
		'MainController',

		function(
			$scope,
			$location,
			$element,
			$timeout,
			$mdMedia,
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

			// automatically invoked by provider.path.setCurrent(name)
			// do NOT call it by yourself
			var setViewAttribute = function(){

				angular.element($element).attr(
					'view',
					path.getCurrentViewName()
				);

				$scope.mainController.currentView = path.getCurrentViewName();

			};

			var setDeviceAttr = function(){
				angular.element($element).attr(
					'device',
					$scope.mainController.device
				);
			};

			// hold all main controller communication
			$scope.mainController = {
				go: go,
				currentView: null,
				setViewAttribute: setViewAttribute,
				device: $mdMedia('gt-sm') ? 'desktop' : 'mobile'
			};

			$timeout(setDeviceAttr, 0);

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
