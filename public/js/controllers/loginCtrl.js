var loginCtrl = angular.module('loginCtrl', []);

loginCtrl.controller('LoginController', ['$scope', '$state', function($scope, $state) {

	var vm = this;
	$scope.testMessage = "This is /login.";

	$scope.doLogin = function() {
		$state.go('dashboard');
	}

}]);
