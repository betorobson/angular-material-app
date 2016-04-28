
'use strict';

(function(){

	var app = angular.module('directives.mainController',[
		]);

	app.controller('MainCtrl', [
		'$scope', '$timeout', '$mdSidenav', '$log', '$location',
		function($scope, $timeout, $mdSidenav, $log, $location) {

			$scope.iOS = /iPhone|iPad/.test(navigator.userAgent);
			
			// redirect between views
			// used by ng-click
			$scope.go = function(view, replace){
				$timeout(
					(function(view, replace){
						return function() {
							if(replace)
								$location.path(view).replace();
							else
								$location.path(view);

							if($mdSidenav('sidemenu').isOpen())
								$scope.toggleLeft();							
						};
					})(view, replace),
					300
				);
			};

			$scope.toggleLeft = buildDelayedToggler('sidemenu');

			/**
			 * Supplies a function that will continue to operate until the
			 * time is up.
			 */
			function debounce(func, wait){			
				var timer;
				return function debounced() {
					var context = $scope,
							args = Array.prototype.slice.call(arguments);
					$timeout.cancel(timer);
					timer = $timeout(function() {
						timer = undefined;
						func.apply(context, args);
					}, wait || 10);
				};
			}

			/**
			 * Build handler to open/close a SideNav; when animation finishes
			 * report completion in console
			 */
			function buildDelayedToggler(navID){
				return debounce(function() {
					$mdSidenav(navID)
						.toggle()
						.then(function () {
							$log.debug('toggle ' + navID + ' is done');
						});
				}, 200);
			}

		}
	]);

	app.directive('mainController', function(){
		return {
			restrict: 'E',
			templateUrl: 'app/directives/maincontroller/maincontroller.html',
			controller: 'MainCtrl'
		};
	});

})();
