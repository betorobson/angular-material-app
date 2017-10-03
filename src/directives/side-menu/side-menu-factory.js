
'use strict';

(function(){

	angular.module('factories.side-menu', [])

	.factory('sideMenuFactory', function(
		$mdSidenav,
		$timeout,
		path
	){

		var scope = null;
		var componentId = 'side-menu';

		var paths = path.getPaths();
		var sideMenuItems = [];

		var getSideMenuItems = function(){
			return sideMenuItems;
		};

		var setSideMenuItems = function(){
			Object.keys(paths).map(function(key){
				if(paths[key].sideMenu){
					sideMenuItems.push(paths[key]);
				}
			});
		};

		/**
		 * Supplies a function that will continue to operate until the
		 * time is up.
		 */
		var debounce = function(func, wait){
			var timer;
			return function debounced() {
				var context = scope,
						args = Array.prototype.slice.call(arguments);
				$timeout.cancel(timer);
				timer = $timeout(function() {
					timer = undefined;
					func.apply(context, args);
				}, wait || 10);
			};
		};

		/**
		 * Build handler to open/close a SideNav; when animation finishes
		 * report completion in console
		 */
		var buildDelayedToggler = function(navID){
			return debounce(function(){
				$mdSidenav(navID)
					.toggle()
					.then(function () {
						console.log('toggle ' + navID + ' is done');
					});
			}, 200);
		};

		var toggle = buildDelayedToggler(componentId);

		var getId = function(){
			return componentId;
		};

		var setScope = function(sideMenuScope){
			scope = sideMenuScope;
		};

		var factory = {
			setScope: setScope,
			toggle: toggle,
			getId: getId,
			getSideMenuItems: getSideMenuItems
		};

		setSideMenuItems();

		return factory;
	});

})();
