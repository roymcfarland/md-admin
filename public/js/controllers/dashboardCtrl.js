var dashboardCtrl = angular.module('dashboardCtrl', []);

dashboardCtrl.controller('dashboardController', ['$scope', '$state', '$http', '$mdSidenav', function($scope, $state, $http, $mdSidenav) {

	$scope.vm = this;

	// sidenav
	$scope.openLeftMenu = function() {
		$mdSidenav('left').toggle();
	}

	// navigation
	$scope.goToCategories = function() {
		$state.go('categories');
	}
	$scope.goToArchives = function() {
		$state.go('archives');
	}

	$scope.doLogout = function() {

		// reset localStorage
		window.localStorage['username'] = '';
		window.localStorage['token'] = '';

		// post-logout navigation
		$state.go('login');

	}

}]);
