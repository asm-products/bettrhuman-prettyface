angular.module( 'bettrhuman.search', [
  'ui.router',
  'plusOne',
  'bhGoogle',
  'bhFacebook'
])

.controller( 'SearchCtrl', function SearchCtrl( $scope, facebookSearch ) {


  $scope.searchResults = [];

  function mapFacebookSearchResults(fbResult) {
    console.log("Mapping result...");
    var searchResult = {
      name : fbResult.name,
      profile : 'https://www.facebook.com/app_scoped_user_id/'+ fbResult.id +'/',
      image: 'https://graph.facebook.com/v2.1/' + fbResult.id + '/picture'
    };
    return searchResult;
  }

  $scope.facebookUserSearch = function() {
    console.log("Search for", $scope.searchName);
    facebookSearch.graphSearch($scope.searchName, function(response) {
      console.log(response);
      var fbResults = response.data.slice(0,10);

      $scope.searchResults = fbResults.map(mapFacebookSearchResults);

      $scope.$apply();
      //
      // FB.api('/'+$scope.tenFbResults[0].id+'/picture', function(response) {
      //   console.log(response);
      // });
    });
  };

})

.directive('bettrhumanSearch', function() {
  return {
    templateUrl: 'search/search.tpl.html'
  };
});
