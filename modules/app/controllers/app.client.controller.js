'use strict';


angular.module('app').controller('AppController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.demoText = "Hello Angular Ui Router";
	}
]);
