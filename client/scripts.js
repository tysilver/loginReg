var myAppModule = angular.module('myApp', ['ui.router', 'myDirectives']);

myAppModule.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/home.html',
			controller: 'homeCtrl',
		})
		.state('about', {
			url: '/about',
			templateUrl: 'views/about.html',
			controller: 'aboutCtrl'
		})
		.state('login', {
			url: '/login',
			templateUrl: 'views/login.html',
			controller: 'loginCtrl'
		})
		.state('signup', {
			url: '/signup',
			templateUrl: 'views/signup.html',
			controller: 'signupCtrl'
		})
		.state('profile', {
			url: '/profile',
			templateUrl: 'views/profile.html',
			controller: 'profileCtrl'
		})
}]);