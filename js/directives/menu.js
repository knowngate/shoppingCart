define(['./module'], function (directives) {
    'use strict';
    directives.directive('listMenu', function() {
	  return {
	    restrict: 'EA',
	    templateUrl: 'partials/nav.html'
	  };
	});
});
