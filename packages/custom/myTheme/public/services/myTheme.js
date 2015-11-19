'use strict';

var myApp = angular.module('mean.myTheme');

//factory style, more involved but more sophisticated
myApp.factory('MyTheme', function($http, $location) {
    return {
        register: function(user) {
            return $http.post('/api/myTheme/register', { 
                email: user.email,
                password: user.password,
                confirmPassword: user.confirmPassword,
                username: user.username,
                name: user.name
            }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
                $http.post('/api/login', {
                    email: user.email,
                    password: user.password
                }).then(function (response) {
                    $location.path( "/" );
                }); 

            }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.

            });
        }
    };
});
