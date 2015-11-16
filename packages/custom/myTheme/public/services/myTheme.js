'use strict';

angular.module('mean.myTheme').factory('MyTheme', [
  function() {

    function MeanUserKlass(){
      this.name = 'users';
      this.user = {};
      this.registerForm = false;
      this.loggedin = false;
      this.isAdmin = false;
      this.loginError = 0;
      this.usernameError = null;
      this.registerError = null;
      this.resetpassworderror = null;
      this.validationError = null;
      self = this;
      $http.get('/api/users/me').success(function(response) {
        if(!response && $cookies.get('token') && $cookies.get('redirect')) {
          self.onIdentity.bind(self)({
            token: $cookies.get('token'), 
            redirect: $cookies.get('redirect').replace(/^"|"$/g, '')
          });
          $cookies.remove('token');
          $cookies.remove('redirect');
        } else {
          self.onIdentity.bind(self)(response);
        }
      });
    }

    MeanUserKlass.prototype.register = function(user) {
      $http.post('/api/register', {
        email: user.email,
        password: user.password,
        confirmPassword: user.confirmPassword,
        username: user.username,
        name: user.name
      })
        .success(this.onIdentity.bind(this))
        .error(this.onIdFail.bind(this));
    };

    return {
      name: 'myTheme'
    };
  }
]);
