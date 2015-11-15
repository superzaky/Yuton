'use strict';

/* jshint -W098 */
angular.module('mean.myTheme').controller('ThemeController', ['$scope', 'Global', 'MyTheme',
  function($scope, Global, MyTheme) {
    $scope.global = Global;
    $scope.package = {
      name: 'myTheme'
    };
  }
]);
