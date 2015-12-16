myAppModule.controller('signupCtrl', ['$scope', '$state', 'UserFactory', function($scope, $state, UserFactory){
    $scope.title = "Sign Up Page"
	UserFactory.getCurrentUser(function (data){
        $scope.current_user = data;
        if ($scope.current_user.local) {
            $state.go('profile')
        }
    });
    $scope.addUser = function (){
        if (!$scope.newUser || !$scope.newUser.email || !$scope.newUser.password) {
            $scope.message = "Email and password fields must be entered."
        } else if ($scope.newUser.password.length < 8 ) {
            $scope.message = "Password must be at least 8 characters."
        } else {
            $scope.newUser.created_at = new Date();
            UserFactory.addUser($scope.newUser, function (data){
                if (data.message) {
                    $scope.message = (data.message);
                } else {
                    $scope.newUser = {};
                    $state.go('profile')
                }
            });
        }
    };
}])