'use strict';


angular.module('app').controller('AppController', ['$scope',
	function($scope) {
		// This provides Authentication context.
		$scope.demoText = "Hello Angular Ui Router";
	}
]);
