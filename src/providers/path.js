
'use strict';

(function(){

	angular.module('provider.path', [])

	.provider('path', function(){

		var rootScope;

		var paths = {

			// keys must be same name of views

			// example:
			fool: {
				path: '/fool/',
				label: 'Fool',
				icon: 'fool.svg',
			 sideMenu: true
			}

		};

		var self = this;
		self.currentKey = 'fool';

		self.get = function(view){
			return paths[view];
		};

		self.addPath = function(view, object){
			paths[view] = object;
			return paths[view];
		};

		self.getPath = function(view){
			return paths[view].path;
		};

		self.getLabel = function(view){
			return paths[view].label;
		};

		self.getCurrent = function(){
			return paths[self.currentKey];
		};

		self.getCurrentViewName = function(){
			return self.currentKey;
		};

		self.setCurrent = function(view){
			if(paths[view]){
				self.currentKey = view;
			}
			rootScope.mainController.setViewAttribute();
		};

		self.getPaths = function(){
			return paths;
		};

		self.$get = function($rootScope){
			rootScope = $rootScope;
			return self;
		};

	});

})();
