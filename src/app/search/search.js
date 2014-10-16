angular.module( 'bettrhuman.search', [
  'ui.router',
  'plusOne',
  'bhGoogle',
  'bhFacebook'
])

.controller( 'SearchCtrl', function SearchCtrl( $scope, facebookSearch, humanSvc) {

  $scope.goToProfile = function(fbId) {
    console.log("go to profile", fbId);

  };

  $scope.searchResults = [];

  function mapFacebookSearchResults(fbResult) {
    console.log("Mapping result...");
    var searchResult = {
      name : fbResult.name,
      profile : fbResult.id,
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
    });
  };

})

.directive('bettrhumanSearch', function() {
  return {
    templateUrl: 'search/search.tpl.html'
  };
});
