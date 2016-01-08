angular.module('comics').controller('loginController', 
  function($scope, $mdDialog, $mdMedia,$localStorage,$filter,UserService,$mdToast,$document) {
    $scope.status = '  ';
    $scope.userList=[];
    $scope.loginmessage='';
    $scope.$storage=$localStorage;

    $scope.checkLogin=function(user){
      UserService.checkLogin(user.nickname,user.password,$scope.showloginmessage);    
    };

    $scope.showloginmessage=function(response){
      $scope.loginmessage=response.message;    
    }

    $scope.showAdvanced = function(ev) {
      $scope.loginmessage='';
      $mdDialog.show({
        controller: DialogController,
        templateUrl: '/component/register/register-dialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: true
      })
      .then(function(user) {
      //Register acepted handler
        UserService.addUser(user);
        $scope.loginmessage='';
        $mdToast.show(
          $mdToast.simple()
            .textContent('Register succesfull!')        
            .position('top right')
            .hideDelay(3000)
        );
      }, function() {});
    };
});

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.registerUser = function(user) {
    $mdDialog.hide(user);
  };
}
