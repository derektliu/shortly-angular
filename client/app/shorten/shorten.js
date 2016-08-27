angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function() {
    Links.addOne($scope.newLink)
    .then(function(resp) {
      $scope.link[$scope.newLink] = $scope.newLink;
      $scope.newLink = '';
    });
  };
});
