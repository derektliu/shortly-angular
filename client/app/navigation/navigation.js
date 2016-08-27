angular.module('shortly.navigation', [])

.controller('NavController', function ($scope, $location, Auth) {

  $scope.checkAuth = function(loc) {
    console.log('checking authorization');
    if (Auth.isAuth()) {
      $location.path(loc);
    } else {
      $location.path('/signin');
    }
  };

  $scope.logout = function() {
    console.log('clicked on logout button');
    Auth.signout();
  };

});
