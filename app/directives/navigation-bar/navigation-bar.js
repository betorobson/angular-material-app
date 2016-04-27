
'use strict';

(function(){

	var app = angular.module('directives.navigation-bar',[]);

	app.controller('NavigationBarCtrl', [
		'$rootScope',
		'$scope',
		'$timeout',
		'$document',
		'navigationBarService',

		function(
			$rootScope,
			$scope,
			$timeout,
			$document,
			navigationBarService
		){

			$scope.navigationBarService = navigationBarService;

			$scope.goBack = function(){

				if(typeof navigationBarService.backButton == 'function'){
					$timeout(function(){
						navigationBarService.backButton();
					},300);
				}

			};

		}
	]);

	app.directive('navigationBar', function(){
		return {
			restrict: 'E',
			templateUrl: 'app/directives/navigation-bar/navigation-bar.html',
			controller: 'NavigationBarCtrl',
		};
	});

	app.service('navigationBarService', function(
		$window
	){
		var service = {
			
			show: false,
			backButton: false,
			menuButton: true,
			fabButtonAdd: false,
			title: '',
			color: '',
			viewOfflineOption: {
				offlineModeEnable: true,
				message: null
			},

			setViewOfflineOptions: function(offlineMode, message){

				service.viewOfflineOption = {
					offlineModeEnable: offlineMode,
					message: message
				};

			},

			resetViewOfflineOptions: function(){
				service.viewOfflineOption = {
					offlineModeEnable: true,
					message: null
				};
			},

			setBackButton: function(func){
				if(!func){
					service.backButton = false;
					service.menuButton = true;
				}
				else{
					service.menuButton = false;
					service.backButton = function(){

						if(typeof func == 'function')
							func();
						else if(func === true){
							console.log('going back');
							$window.history.back();
						}
						
					};					
				}
			},

			setFabButtonAdd: function(func){

				if(!func)
					service.fabButtonAdd = false;
				else
					service.fabButtonAdd = func;

			},

			setTitle: function(title){
				this.title = title;
			}

		};

		return service;
	});

})();
