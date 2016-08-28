angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  $scope.data = {};
  $scope.sortType = 'title';
  $scope.sortReverse = false;
  $scope.searchLink = '';

  Links.getAll()
  .then(function(links) {
    $scope.data.links = links;
    console.log($scope.data);
  });
  
});
