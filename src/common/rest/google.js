var bhGoogle = angular.module('bhGoogle', []);


bhGoogle.service('googleLogin', [function () {
  console.log("Google login");
  this.login = function (immediate, callback) {
    gapi.auth.authorize({ client_id: clientId, scope: scopes, immediate: immediate}, callback);
  };

}]);



bhGoogle.service('humanSvc', [function() {
  console.log("Bettrhuman login");
  gapi.client.humans.login({accessToken:facebookToken}).execute(function(data) {
    console.log("login response", data);
  });

}]);
