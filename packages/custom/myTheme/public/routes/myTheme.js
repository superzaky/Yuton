'use strict';

angular.module('mean.myTheme',  ['mean.system']).config(['$viewPathProvider', '$stateProvider',
  function($viewPathProvider, $stateProvider) {
    // $stateProvider.state('myTheme example page', {
    //   url: '/myTheme/example',
    //   templateUrl: 'myTheme/views/index.html'
    // });

	$viewPathProvider.override('system/views/index.html', 'myTheme/views/index.html');
  }
]);
