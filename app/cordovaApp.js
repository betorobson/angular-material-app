
'use strict';

(function(){

var cordovaApp = {

	initialize: function() {
		console.log('cordovaApp.js initialized');
		this.bindEvents();
	},

	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},

	onDeviceReady: function() {
		console.log('device ready');
		cordovaApp.angularBootStrap();
	},

	angularBootStrap: function(){
		angular.element(document).ready(function() {
			angular.bootstrap(document, ['angularMaterialApp']);
		});
	}

};

cordovaApp.initialize();

window.cordovaApp = cordovaApp;

var s = document.createElement('script');

s.onload = function(){
};

s.onerror = function(){
	cordovaApp.angularBootStrap();
}; 

s.src='cordova.js'; 

document.querySelector('head').appendChild(s);

})();
