var appRouter = angular.module('appRouter', ['ui.router'])

appRouter.config(function($stateProvider, $urlRouterProvider) {

	// if unmatched url, redirect to login
	$urlRouterProvider.otherwise('/login');

	// create $states
	$stateProvider
		.state('login', {
			url: '/login',
			templateUrl: '../views/login.html',
			controller: 'loginController'
		})
		.state('dashboard', {
			url: '/dashboard',
			templateUrl: '../views/dashboard.html',
			controller: 'dashboardController'
		})
		.state('categories', {
			url: '/categories',
			templateUrl: '../views/categories.html',
			controller: 'categoriesController'
		})
		.state('archives', {
			url: '/archives',
			templateUrl: '../views/archives.html',
			controller: 'archivesController'
		})
		.state('streams', {
			url: '/streams',
			templateUrl: '../views/streams.html',
			controller: 'streamsController'
		})

});
