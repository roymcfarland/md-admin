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

				$scope.archives = data.success;

				$scope.sortArchive($scope.archives);

			})
			.error(function(data, status) {
				console.log("error data:", data);
				console.log("error status:", status);
			})

	}
	$scope.init();


	/////////////////////////////
	////// sortArchives() ///////
	/////////////////////////////
	
	$scope.sortArchive = function(arr) {

		$scope.inappropriateArchives = [];

		for (var i = 0; i < arr.length; i ++) {
			if ($scope.archives[i].flaggedAsInapropriate.length > 0) {
				var flaggedArchive = $scope.archives[i];
				$scope.inappropriateArchives.push(flaggedArchive)
			}
			else {
				
				// do nothing

			}
		}

	}


	/////////////////////////////
	///// deleteArchive() ///////
	/////////////////////////////
	
	$scope.deleteArchive = function(archive) {

		// ajax
		var payload = {
			username: window.localStorage['username'],
			token: window.localStorage['token'],
			id: archive.id
		};

		$http.post('http://snaportationvm.cloudapp.net/api/archive/delete', payload)
			.success(function(data, status) {
				// do nothing
			})
			.error(function(data, status) {
				console.log("error data:", data);
				console.log("error status:", status);
			})

	}


}]);
