myAppModule.factory('UserFactory', ['$http', function($http){
		factory = {};
        var users = [];
        var current_user = {};

        // factory.getUsers = function(callback){
        //     $http.get('/users').success(function (output){
        //         if (users.length < 1) {
        //             for (var i = 0; i < output.length; i++) {
        //                 users.push(output[i]);
        //             }
        //         }
        //         callback(users);
        //     });
        //     return users;
        // };

        factory.addUser = function(info, callback) {
            console.log("We went to the addUser method")
            $http.post('/signup', {email: info.email, password: info.password, created_at: info.created_at}).success(function (output){
                if (output.user) {
                    current_user = output.user;
                }
                console.log("And the output for the addUser post method was: ")
                console.log(output)
                callback(output);
            });
        };

        factory.getCurrentUser = function(callback) {
            callback(current_user);
        };

        factory.login = function(info, callback){
            console.log("Here is the info we should be sending...")
            console.log(info)
            $http.post('/login', info).success(function (output){
                if (output) {
                    current_user = output.user;
                    console.log("We sent the user back with: ")
                    console.log(output.user)
                }
                callback(output);
            });
        };

        factory.logout = function(callback){
            $http.get('/logout').success(function (data){
                current_user = {};
                console.log(current_user)
                console.log("That was the current user.")
                callback(current_user)
            });
        };

        return factory
}])