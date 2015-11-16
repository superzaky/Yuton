'use strict';

angular.module('mean.myTheme').config(['$viewPathProvider', '$stateProvider',
  function($viewPathProvider, $stateProvider) {
	$viewPathProvider.override('system/views/index.html', 'myTheme/views/index.html');
    $viewPathProvider.override('users/views/register.html', 'myTheme/views/register.html');

    $stateProvider.state('home page', {
      url: '/',
      templateUrl: 'myTheme/views/index.html'
    });
  }
]);