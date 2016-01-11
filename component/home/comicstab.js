angular.module('comics').directive('comicstab', function() {
  return {
      restrict: 'E',
      replace: 'true',
      templateUrl: 'component/home/comicstabTemplate.html'
  };
});