define([], function () {
  'use strict';

  return function (useCaseApiAdapter) {
    function ShowController($scope, $routeParams) {
      $scope.task = {
        id: $routeParams.id
      };
    }

    ShowController.$inject = ['$scope', '$routeParams'];
    return ShowController;
  }
});