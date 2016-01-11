angular.module('comics').directive('comicsheader', function() {
  return {
      restrict: 'E',
      replace: 'true',
      templateUrl: 'component/header/headerTemplate.html'
  };
});