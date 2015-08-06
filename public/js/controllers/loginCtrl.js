var loginCtrl = angular.module('loginCtrl', []);

loginCtrl.controller('loginController', ['$scope', '$state', '$http', function($scope, $state, $http) {

	$scope.vm = this;

	$scope.doLogin = function(username, password) {
		
		// ajax
		var payload = {
			username: username,
			password: password
		}
		$http.post('http://snaportationvm.cloudapp.net/auth/phone/login', payload)
			.success(function(data, status) {
				
				// dynamically set username and token in localStorage
				var username = data.local.username;
				var token = data.local.token;
				window.localStorage['username'] = username;
				window.localStorage['token'] = token;
				
				// post-login navigation
				$state.go('dashboard');

			})
			.error(function(data, status) {
				
				// error handling
				console.log("error status:", status);
				console.log("error data:", data);

			})

	}

}]);
