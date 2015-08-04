var archivesCtrl = angular.module('archivesCtrl', []);

archivesCtrl.controller('archivesController', ['$scope', '$state', '$http', '$mdSidenav', function($scope, $state, $http, $mdSidenav) {

	$scope.vm = this;

	/////////////////////////////
	/////// sidenav menu ////////
	/////////////////////////////

	$scope.openLeftMenu = function() {
		$mdSidenav('left').toggle();
	}


	/////////////////////////////
	//////// navigation /////////
	/////////////////////////////

	$scope.goToCategories = function() {
		$state.go('categories');
	}
	$scope.goToDashboard = function() {
		$state.go('dashboard');
	}
	$scope.goToStreams = function() {
		$state.go('streams');
	}


	/////////////////////////////
	//////// doLogout() /////////
	/////////////////////////////

	$scope.doLogout = function() {

		// reset localStorage
		window.localStorage['username'] = '';
		window.localStorage['token'] = '';

		// post-logout navigation
		$state.go('login');

	}


	/////////////////////////////
	////////// init() ///////////
	/////////////////////////////

	$scope.init = function() {

		// ajax
		$scope.username = window.localStorage['username'];
		$scope.token = window.localStorage['token'];

		$http.get('http://snaportationvm.cloudapp.net/api/archive/get-all?username=' + $scope.username + '&token=' + $scope.token)
			.success(function(data, status) {
				// console.log('### SUCCESS ###');
				console.log('data.success:', data.success);
				// console.log('status:', status);
				$scope.archives = data.success;
			})
			.error(function(data, status) {
				console.log("error data:", data);
				console.log("error status:", status);
			})

	}
	$scope.init();


	/////////////////////////////
	///// deleteArchive() ///////
	/////////////////////////////
	
	$scope.deleteArchive = function(archive) {
		
	}

}]);
