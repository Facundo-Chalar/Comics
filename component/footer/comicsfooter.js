angular.module('comics').directive('comicsfooter', function() {
  return {
      restrict: 'E',
      replace: 'true',
      templateUrl: '/component/footer/footerTemplate.html'
  };
});