var streamsCtrl = angular.module('streamsCtrl', []);

streamsCtrl.controller('streamsController', ['$scope', '$state', '$http', '$mdSidenav', function($scope, $state, $http, $mdSidenav) {

	$scope.vm = this;

	/////////////////////////////
	/////// sidenav menu ////////
	/////////////////////////////

	$scope.openLeftMenu = function() {
		$mdSidenav('left').toggle();
	}


	/////////////////////////////
	/////// navigation //////////
	/////////////////////////////

	$scope.goToCategories = function() {
		$state.go('categories');
	}
	$scope.goToDashboard = function() {
		$state.go('dashboard');
	}
	$scope.goToArchives = function() {
		$state.go('archives');
	}


	/////////////////////////////
	//////// logout() ///////////
	/////////////////////////////

	$scope.doLogout = function() {

		// reset localStorage
		window.localStorage['username'] = '';
		window.localStorage['token'] = '';

		// post-logout navigation
		$state.go('login');

	}


	/////////////////////////////
	///////// init() ////////////
	/////////////////////////////

	$scope.init = function() {

		$scope.username = window.localStorage['username'];
		$scope.token = window.localStorage['token'];

		$http.get('http://snaportationvm.cloudapp.net/api/stream/get-all?username=' + $scope.username + '&token=' + $scope.token)
			.success(function(data, status) {
				console.log("### SUCCESS ###");
				$scope.streams = data.success;
			})
			.error(function(data, status) {
				console.log("### ERROR ###");
			})

	}
	$scope.init();


	/////////////////////////////
	///// deleteStream() ////////
	/////////////////////////////
	
	$scope.deleteStream = function(stream) {
	
		console.log("stream:", stream);
	
	}

}]);
