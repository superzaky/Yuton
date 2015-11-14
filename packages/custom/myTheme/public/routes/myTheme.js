'use strict';

angular.module('mean.myTheme',  ['mean.system']).config(['$viewPathProvider', '$stateProvider',
  function($viewPathProvider, $stateProvider) {
	$viewPathProvider.override('system/views/index.html', 'myTheme/views/index.html');
  }
]);
