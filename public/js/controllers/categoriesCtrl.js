var categoriesCtrl = angular.module('categoriesCtrl', []);

categoriesCtrl.controller('categoriesController', ['$scope', '$state', '$http', '$mdSidenav', function($scope, $state, $http, $mdSidenav) {

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

	$scope.goToDashboard = function() {
		$state.go('dashboard');
	}
	$scope.goToArchives = function() {
		$state.go('archives');
	}
	$scope.goToStreams = function() {
		$state.go('streams');
	}


	/////////////////////////////
	///////// logout() //////////
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

		$http.get('http://snaportationvm.cloudapp.net/api/category/get-master?username=' + $scope.username + '&token=' + $scope.token)
			.success(function(data, status) {
				$scope.categories = data.success;
			})
			.error(function(data, status) {

				// error handling
				console.log("error data:", data);
				console.log("error status:", status);

			})

	};
	$scope.init();



	/////////////////////////////
	////// deleteCatgory() //////
	/////////////////////////////

	$scope.deleteCategory = function(category) {

		// ajax
		var payload = {
			username: window.localStorage['username'],
			token: window.localStorage['token'],
			masterCategory: category.name
		}
		// console.log(payload);
		
		$http.post('http://snaportationvm.cloudapp.net/api/category/delete-master', payload)
			.success(function(data, status) {
				console.log("### SUCCESS ###");
				console.log("data:", data);
				console.log("status:", status);

				$scope.init();

			})
			.error(function(data, status) {
				console.log("error data:", data);
				console.log("error status:", status);
			})

	};



	/////////////////////////////
	//////// addCatgory() ///////
	/////////////////////////////

	$scope.addCategory = function(category) {

		// ajax
		var payload = {
			username: window.localStorage['username'],
			token: window.localStorage['token'],
			name: category,
			subCategory: 'Test Sub',
			description: '',
			imageUrl: ''
		}
		//console.log(payload);
		
		$http.post('http://snaportationvm.cloudapp.net/api/category/add-master', payload)
			.success(function(data, status) {
				console.log("### SUCCESS ###");
				console.log("data:", data);
				console.log("status:", status);

				$scope.init();

			})
			.error(function(data, status) {
				console.log("### ERROR ###");
				console.log("data:", data);
				console.log("status:", status);
			})

	};




}]);
