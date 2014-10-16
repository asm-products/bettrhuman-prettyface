var bhFacebook = angular.module('bhFacebook', []);


bhFacebook.service('facebookLogin', [function () {

  this.login = function (callback) {
    console.log("Facebook login");
    FB.login(callback);
    // FB.login(function(response) {
    //   console.log(response);
    //   facebookToken = response.authResponse.accessToken;
    //   if (response.authResponse) {
    //    console.log('Welcome!  Fetching your information.... ');
    //    FB.api('/me', function(response) {
    //      console.log('Good to see you, ', response);
    //    });
    //   } else {
    //    console.log('User cancelled login or did not fully authorize.');
    //   }
    // });
  };

}]);

bhFacebook.service('facebookSearch', [function() {

  this.graphSearch = function(query, callback) {
    console.log("Facebook Graph Search for", query);
    var urlCall = "/search?q="+ query + "&type=user&access_token=";
    FB.api(urlCall, callback);
  };

}]);
