define(['stubs/tasks'], function (tasks) {
  'use strict';

  function ToDoController($scope) {
    function loadTasks() {
      $scope.tasks = tasks;
    }

    $scope.cargarTareas = loadTasks;
  }

  ToDoController.$inject = ['$scope'];
  return ToDoController;
});