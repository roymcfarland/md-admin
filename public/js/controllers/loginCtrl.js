var loginCtrl = angular.module('loginCtrl', []);

loginCtrl.controller('loginController', ['$scope', '$state', '$http', function($scope, $state, $http) {

	$scope.vm = this;

	$scope.doLogin = function() {
		
		// ajax
		

		// navigation
		$state.go('dashboard');
	}

}]);
