myDirectives = angular.module('myDirectives', []);

myDirectives.directive('myNav', function() {
	return {
		restrict: 'E',
		templateUrl: '/../views/header.html'
	}
})

myDirectives.directive('myFooter', function() {
	return {
		restrict: 'E',
		templateUrl: '/../views/footer.html'
	}
})