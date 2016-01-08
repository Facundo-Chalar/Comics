angular.module('comics').service('comics').service('UserService',function($localStorage,$filter,$cookies,AuthenticationService,SessionService,$location,$http){

        this.userList=[];
       

      $http.get('assets/json/users.json').success(function(data) {
        this.userList=data;
        $localStorage.userList=angular.toJson(this.userList);        
      });

        this.addUser=function(user){
          this.userList=angular.fromJson($localStorage.userList);
            if(angular.isUndefined(this.userList)){
                this.newList=[];               
                this.newList.push(user);
                $localStorage.userList=angular.toJson(this.newList);

            }else{
              this.userList.push(user);
              $localStorage.userList=angular.toJson(this.userList);
            }
        };

        this.userExists=function(username){
          return this.findUser(username)!==null?true:false;
        };

       this.getAll=function(){
          this.allUsers=angular.isUndefined($localStorage.userList)?[]:$localStorage.userList;
          return angular.fromJson(this.allUsers);
        };

        this.findUser=function(userName){
          var filtered = $filter('filter')(this.getAll(), { nickName: userName },true);
          var user = filtered.length ? filtered[0] : null;
          return user;
        };

       this.checkLogin=function(nickname,password,callback){
          var user=this.findUser(nickname);

              if (user !== null && user.password === password) {
                          response = { success: true,message:'' };
				                  var today = new Date();
				                  var expired = new Date(today);
				  
                          expired.setDate(today.getDate() + 1);
				                  $cookies.put('user', user.nickName, {expires : expired });
				                  AuthenticationService.login(user);
				                  $location.url('/');
              } else {
                  response = { success: false, message: 'Username or password is incorrect' };         
              }
          callback(response);
        };



		this.loginAdmin = function() {
      // this should be replaced with a call to your API for user verification (or you could also do it in the service)
		AuthenticationService.login({name: 'Admin', role: 'admin'});
    };

});
