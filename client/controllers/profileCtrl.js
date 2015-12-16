myAppModule.controller('profileCtrl', ['$scope', '$state', 'UserFactory', function($scope, $state, UserFactory){
	$scope.message = 'Profile page.';
        UserFactory.getCurrentUser(function (data){
            $scope.current_user = data;
            if (!$scope.current_user.local) {
                $state.go('home')
            } else {
                var d = new Date($scope.current_user.local.created_at);
                $scope.userDate = setDate(d);
            }
        });

        $scope.logout = function(){
            UserFactory.logout(function (data){
                $scope.current_user = {};
            });
            $state.go('home');
        };
}])