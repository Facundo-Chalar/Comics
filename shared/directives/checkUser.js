angular.module('comics').directive('checkUser', ['$parse','UserService', function ($parse,UserService) {
 return {
    restrict: 'A',
    scope: {
      usernickname: '=',
    },
    require: 'ngModel',
    link: function link(scope, elem, attrs, ctrl) {
      var validator = function (value) {
      ctrl.$setValidity('existentuser', !UserService.userExists(value.toLowerCase()));
          return value;
      }
      ctrl.$parsers.unshift(validator);
      ctrl.$formatters.push(validator);
      scope.$watch('usernickname', function(newval, oldval) {
        validator(ctrl.$viewValue);
      });
    }
  };
}]);