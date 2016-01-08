angular.module('comics').controller('currentUserController',function($scope,SessionService,AuthenticationService,UserService, $mdDialog,$location,$cookies){
    
    $scope.currentUser=function(){
		  
        var userCookie=$cookies.get('user');
		    if(userCookie!=null && userCookie!=''){
		      var searchResult=UserService.findUser(userCookie);		
			    SessionService.currentUser=searchResult;
		    }
		    if(SessionService.currentUser!==null){
			     return SessionService.currentUser;
	      }else{
		      $location.path('/login');
		      return null;
	      }
    };

    $scope.isadmin=function(){
    	return  $scope.currentUser().isadmin;
    }

    $scope.logout=function(){
	   	  AuthenticationService.logout();
		    $cookies.remove('user');
		    $location.url('/login');
    };

    $scope.showAdvanced = function(ev) { 
      $mdDialog.show({
        controller: DialogController,
        templateUrl: '/component/users/profile-dialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: true
      })
      .then(function() {}, function() {});
    };
});