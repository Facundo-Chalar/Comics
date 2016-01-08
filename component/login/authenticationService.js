angular.module('comics').factory('AuthenticationService', function ($http, SessionService) {
  			'use strict';
  			return {
    			login: function (user) {
      				SessionService.currentUser = user;
    			},
    			logout: function(){
	      			SessionService.currentUser=null;
    			},
    			isLoggedIn: function () {
	      			return SessionService.currentUser !== null;
    			}
  			};
		});