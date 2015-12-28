(function () {
    'use strict';

    angular
        .module('comics')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function LoginController($location, AuthenticationService, FlashService) {
        var loginCtrl = this;

        loginCtrl.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            loginCtrl.dataLoading = true;
            AuthenticationService.Login(loginCtrl.username, loginCtrl.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(loginCtrl.username, loginCtrl.password);
                    $location.path('/');
                } else {
                    FlashService.Error(response.message);
                    loginCtrl.dataLoading = false;
                }
            });
        };
    }

})();
