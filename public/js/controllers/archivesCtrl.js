var archivesCtrl = angular.module('archivesCtrl', []);

archivesCtrl.controller('archivesController', ['$scope', '$state', '$http', '$mdSidenav', function($scope, $state, $http, $mdSidenav) {

	$scope.vm = this;

	// sidenav
	$scope.openLeftMenu = function() {
		$mdSidenav('left').toggle();
	}


	// navigation
	$scope.goToCategories = function() {
		$state.go('categories');
	}
	$scope.goToDashboard = function() {
		$state.go('dashboard');
	}
	$scope.goToStreams = function() {
		$state.go('streams');
	}


	// logout
	$scope.doLogout = function() {

		// reset localStorage
		window.localStorage['username'] = '';
		window.localStorage['token'] = '';

		// post-logout navigation
		$state.go('login');

	}


	// init
	$scope.init = function() {

	}
	$scope.init();

}]);
