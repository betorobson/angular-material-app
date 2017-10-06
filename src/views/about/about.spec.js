
// describe('views.about: ', function(){

// 	var	mainController,
// 			controller;

// 	beforeEach(module('uiChallengeApp'));

// 	beforeEach(function () {

// 		inject(function($rootScope, $controller, path){

// 			path.$get($rootScope);

// 			mainController = $controller('MainController', {
// 				$scope: $rootScope,
// 				$element: {}
// 			});

// 			controller = $controller('ViewAboutController', {
// 				$scope: $rootScope
// 			});

// 			controller.inject = {
// 				path: path
// 			};

// 		});

// 	});

// 	it('test views.about config phase', function(){
// 		console.log('------>' + JSON.stringify(controller.inject.path.getCurrent()));
// 		expect(1).toEqual(1);
// 	});

// });

/////// sample provider spec

// describe('app sample', function () {

// 		var myValueProviderObj;

// 		beforeEach(function () {
// 			module('provider.myvalue', function(myValueProvider){
// 				myValueProviderObj = myValueProvider;
// 				spyOn(myValueProviderObj, 'setValue');
// 			});
// 			module('sample');
// 			module('view.sample');
// 			inject();
// 		});

// 		it('should set value', function() {
// 			expect(myValueProviderObj.setValue)
// 				.toHaveBeenCalled();
// 				// .toHaveBeenCalledWith(Object);
// 		});

// });

describe('view.about', function () {

		var pathProviderObj;
		var pathKey;
		var pathObj;

		beforeEach(function () {

			module('ngRoute');
			module('ngMaterial');
			module('directives.mainController');
			module('factories.navigation-bar');

			module('provider.path', function(pathProvider){
				pathProviderObj = pathProvider;
				spyOn(pathProviderObj, 'addPath').and.callThrough();
			});

			module('views.about');

			inject(function($controller, $rootScope, path){

				var mainController = $controller('MainController', {
					$scope: $rootScope,
					$element: {}
				});

				var controller = $controller('ViewAboutController', {
					$scope: $rootScope
				});

				pathKey = path.currentKey;
				pathObj = path.get(pathKey);

			});

		});

		it('should call provider.path.addPath', function() {
			expect(pathProviderObj.addPath)
				// .toHaveBeenCalled();
				.toHaveBeenCalledWith(
					pathKey,
					pathObj
				);
		});

});


// describe('sampleProvider', function() {

// 	// Provider instance
// 	var myValue;

// 	// Instanciates the module
// 	beforeEach(function() {
// 		module('sample');
// 	});

	// Here we don't do any configuration to our provider
	// describe('Default Configuration', function() {

	// 	beforeEach(function() {
	// 		inject(function(_myValue_){
	// 			myValue = _myValue_;
	// 			myValue.setName('x');
	// 			// spyOn(myValue, 'setName');
	// 			// spyOn(myValue, 'setName').and.callThrough();
	// 		});
	// 	});

	// 	it('Should get the default value', function() {
	// 		expect(myValue.getValue()).toBe('Default Value');
	// 	});

	// 	it('provider has been called', function() {
	// 		expect(myValue.setName).toHaveBeenCalled();
	// 	});

	// });

	// // Here we do some configuration
	// describe('Configuration A', function() {

	// 	var myValueProviderObj;

	// 	// Configure the provider and instanciate it
	// 	beforeEach(function() {
	// 		module(function(myValueProvider){
	// 			myValueProvider.setValue('A');
	// 			myValueProviderObj = myValueProvider;
	// 			// spyOn(myValueProviderObj, 'setValue');
	// 		spyOn(myValueProviderObj, 'setValue').and.callThrough();
	// 		});

	// 		inject(function(_myValue_) {
	// 			myValue = _myValue_;
	// 		});

	// 		// spyOn(myValue, 'setName');
	// 		spyOn(myValue, 'setName').and.callThrough();

	// 	});

	// 	it('Should get the configured value', function() {
	// 		expect(myValue.getValue()).toBe('A');
	// 	});

	// 	it('provider setValue has been called', function() {
	// 		expect(myValueProviderObj.setValue).toHaveBeenCalled();
	// 	});

	// 	it('provider setName has been called', function() {
	// 		expect(myValue.setName).toHaveBeenCalled();
	// 	});

	// 		console.log('.......' + window.blah.getName());
	// 	it('window.blah.getName', function() {
	// 		expect(window.blah.getName).toHaveBeenCalled();
	// 	});

	// });

// });

// describe('example', function () {
// 		var $locationProvider;

// 		beforeEach(function () {
// 				angular.module('locationProviderConfig', [])
// 						.config(function(_$locationProvider_) {
// 								$locationProvider= _$locationProvider_;
// 								spyOn($locationProvider, 'html5Mode');
// 						});
// 				module('locationProviderConfig');
// 				module('example');
// 				inject();
// 		});

// 		beforeEach(function () {
// 				module(function(_$locationProvider_) {
// 						$locationProvider = _$locationProvider_;
// 						spyOn($locationProvider, 'html5Mode');
// 				});
// 				module('example');
// 				inject();
// 		});

// 		it('should set html5 mode', function() {
// 				expect($locationProvider.html5Mode)
// 						.toHaveBeenCalledWith(true);
// 		});
// });