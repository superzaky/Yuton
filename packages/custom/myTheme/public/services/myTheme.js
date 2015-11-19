'use strict';

var myApp = angular.module('mean.myTheme');

//factory style, more involved but more sophisticated
myApp.factory('MyTheme', function($http, $location, MeanUser) {
    return {
        register: function(user) {
            return $http.post('/api/myTheme/register', { 
                email: user.email,
                password: user.password,
                confirmPassword: user.confirmPassword,
                username: user.username,
                name: user.name
            }).then(function successCallback(response) {
              MeanUser.login(user);

            }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.

            });
        }
    };
});
