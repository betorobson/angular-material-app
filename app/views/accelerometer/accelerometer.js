'use strict';

(function(){
	var app = angular.module('views.accelerometer', []);

	app.controller('AccelerometerCtrl', 
		function(
			$scope,
			$rootScope,
			$timeout,
			$sce,
			navigationBarService
		){

			$rootScope.sideMenuActivedItem = 'accelerometer';

			navigationBarService.setBackButton(true);
			navigationBarService.setTitle('Acelerômetro');
			navigationBarService.rightButtons = false;

			$scope.xyz = '';
			$scope.css = {};

			var onSuccess = function(acceleration) {
					$timeout(function(){

						$scope.xyz = $sce.trustAsHtml(
							'Acceleration X: ' + acceleration.x + '<br />' +
							'Acceleration Y: ' + acceleration.y + '<br />' +
							'Acceleration Z: ' + acceleration.z
						);

						$('#accelerometerCharts').highcharts().series[0].setData([
							(acceleration.x * -1),
							acceleration.y,
							acceleration.z
						]);

						var x = Math.round(acceleration.x);

						if(x < 0)
							x = x * -1;
						else if(x > 0)
							x = 20 - x;

						x = x / 20;

						$scope.css = {
							'-webkit-transform': 'rotate(' + (360 * x) + 'deg)',
							transform: 'rotate(' + (360 * x) + 'deg)'
						};

					},0);
			};

			var onError = function(error) {
				$scope.xyz = $sce.trustAsHtml('onError! ' + error);
			};

			var watchID;

			var watchAccelerometer = function(){
				if(navigator.accelerometer){

					watchID = navigator.accelerometer.watchAcceleration(
						onSuccess,
						onError,
						{
							frequency: 300
						}
					);

				}
			};

			var drawCharts = function(){

				var categories = ['x', 'y', 'z'];
				var axis = [0,0,0];
				
				$('#accelerometerCharts').highcharts({
						chart: {
								backgroundColor: 'transparent',
								type: 'bar'
						},
						title: {
								text: 'title'
						},
						xAxis: [{
								categories: categories,
								reversed: false,
								labels: {
										step: 1
								}
						}, { // mirror axis on right side
								opposite: true,
								reversed: false,
								categories: categories,
								linkedTo: 0,
								labels: {
										step: 1
								}
						}],
						yAxis: {
								title: {
										text: null
								},
								labels: {
										formatter: function () {
												return Math.abs(this.value) + '%';
										}
								},
								min: -10,
								max: 10
						},

						plotOptions: {
								series: {
										stacking: 'normal'
								}
						},

						series: [{
								name: 'Acelerômetro',
								data: axis
						}],

						credits: {
							enabled: false
						}

				});

			};

			$scope.$on(
				'$viewContentLoaded',
				function(){
					$timeout(function(){
						drawCharts();
						watchAccelerometer();
					}, 0);
				}
			);

			$scope.$on(
				'$destroy',
				function(){
					$timeout(function(){
						navigator.accelerometer.clearWatch(watchID);
					}, 0);
				}
			);

		}
	);

})();
