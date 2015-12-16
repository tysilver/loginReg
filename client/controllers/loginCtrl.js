myAppModule.controller('loginCtrl', ['$scope', '$state', 'UserFactory', function($scope, $state, UserFactory){
	$scope.title = "Login"
	UserFactory.getCurrentUser(function (data){
        $scope.current_user = data;
        if ($scope.current_user.local) {
            $state.go('profile')
        }
    });
    $scope.loginUser = function(){
        if (!$scope.newVisitor || !$scope.newVisitor.email || !$scope.newVisitor.password) {
            $scope.message = "Email and password fields must be entered."
        } else if ($scope.newVisitor.password.length < 8 ) {
            $scope.message = "Password must be at least 8 characters."
        } else {
            UserFactory.login($scope.newVisitor, function (data){
                if (data.message) {
                    $scope.message = (data.message);
                    console.log($scope.message)
                } else {
                    $scope.newVisitor = {};
                    console.log(data)
                    $state.go('profile')
                }
            });
        }
    };
}])