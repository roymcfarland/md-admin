var categoriesCtrl = angular.module('categoriesCtrl', []);

categoriesCtrl.controller('categoriesController', ['$scope', '$state', '$http', '$mdSidenav', function($scope, $state, $http, $mdSidenav) {

	$scope.vm = this;

	// sidenav
	$scope.openLeftMenu = function() {
		$mdSidenav('left').toggle();
	}

	// navigation
	$scope.goToDashboard = function() {
		$state.go('dashboard');
	}


	$scope.doLogout = function() {

		// reset localStorage
		window.localStorage['username'] = '';
		window.localStorage['token'] = '';

		// post-logout navigation
		$state.go('login');

	}


	$scope.init = function() {

		// ajax
		$scope.username = window.localStorage['username'];
		$scope.token = window.localStorage['token'];

		$http.get('http://snaportationvm.cloudapp.net/api/category/get-master?username=' + $scope.username + '&token=' + $scope.token)
			.success(function(data, status) {
				$scope.categories = data.success;
			})
			.error(function(data, status) {

				// error handling
				console.log("error data:", data);
				console.log("error status:", status);

			})

	}
	$scope.init();

}]);
