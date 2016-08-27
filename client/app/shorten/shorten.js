angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function(isValid) {
    console.log('Valid?', isValid);
    if (isValid) {
      $scope.link.url = $scope.newLink;
      
      Links.addOne($scope.link)
      .then(function(resp) {
        $scope.newLink = '';
      });
    } else {
      console.log('Link is not valid');
    }
  };
});
