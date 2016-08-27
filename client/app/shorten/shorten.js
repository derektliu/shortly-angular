angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function() {
    
    $scope.link.url = $scope.newLink;

    Links.addOne($scope.link)
    .then(function(resp) {
      $scope.newLink = '';
    });
  };
});
