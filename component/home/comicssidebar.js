angular.module('comics').directive('comicssidebar', function() {
  return {
      restrict: 'E',
      replace: 'true',
      templateUrl: 'component/home/sidebarTemplate.html'
  };
});