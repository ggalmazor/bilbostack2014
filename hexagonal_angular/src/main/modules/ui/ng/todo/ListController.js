define([], function () {
  'use strict';

  return function (useCaseApiAdapter) {
    function ListController($scope) {
      $scope.nombre = '';
      $scope.crearTarea = function () {
        console.log("Click");
        useCaseApiAdapter.execute('crearTarea', [$scope.nombre]);
      };
    }

    ListController.$inject = ['$scope'];
    return ListController;
  }
});