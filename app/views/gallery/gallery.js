
'use strict';

(function(){
	var app = angular.module('views.gallery', []);

	app.controller('GalleryCtrl', 
		function(
			$scope,
			$rootScope,
			$timeout,
			navigationBarService
		){

			$rootScope.sideMenuActivedItem = 'gallery';

			navigationBarService.setBackButton(true);
			navigationBarService.setTitle('Galeria');

			$scope.pictures = [];

			var webPictures = [
				'http://s3.amazonaws.com/etntmedia/media/images/ext/543627202/happy-people-friends.jpg',
				'http://www.cpplcounseling.com/uploads/4/6/8/2/46828361/2181364_orig.jpg',
				'https://pixabay.com/static/uploads/photo/2014/08/15/11/29/sea-418742_960_720.jpg',
				'http://www.picgifs.com/graphics/s/sea/graphics-sea-466154.jpg',
				'http://ichef.bbci.co.uk/news/660/cpsprodpb/800C/production/_87208723_pagasa976.jpg',
				'http://images.indianexpress.com/2015/11/south-china-sea-759.jpg'
			];

			var ls = function (fileSystem) {
				console.log('fileSystem', fileSystem);
					var r = fileSystem.createReader();
					r.readEntries(
						function(entries){
							if(
								(/iPhone|iPad/.test(navigator.userAgent) && (fileSystem.name == 'tmp' || fileSystem.fullPath == cordova.file.applicationStorageDirectory.replace(/^.*?(\/var.*?$)/,'$1')))
								||
								(/Android/.test(navigator.userAgent) && (fileSystem.name == 'cache' || fileSystem.nativeURL == cordova.file.externalApplicationStorageDirectory))
							){
								var picturesList = [];
								for(var key in entries){
									if(entries[key].isDirectory){
										console.log('directory', entries[key].name);
										ls(entries[key]);
									}else{
										console.log(entries[key]);
										if(/\.jpg/.test(entries[key].name))
											picturesList.push(entries[key].nativeURL);
									}
								}
								if(picturesList.length){
									$timeout(function(){
										$scope.pictures = picturesList;
									},0);
								}
							}
						},
						function(e){console.log(e)}
					);
			};

			$scope.$on(
				'$viewContentLoaded',
				function(){
					$timeout(function(){
						if(window.cordova){
							if(/iPhone|iPad/.test(navigator.userAgent))
								window.resolveLocalFileSystemURL(cordova.file.applicationStorageDirectory,ls);
							else if(/Android/.test(navigator.userAgent))
								window.resolveLocalFileSystemURL(cordova.file.externalApplicationStorageDirectory,ls);
						}else{
							$scope.pictures = webPictures;
						}						
					},0);
				}
			);

			$scope.$on(
				'$destroy',
				function(){
					$timeout(function(){
						$scope.navigationBarService.rightButtons = false;
					}, 0);
				}
			);

		}
	);

})();
