define(['angular', 'todo/ToDoController', 'angular-route' ], function (angular, ToDoController) {
  "use strict";

  var todo = angular.module("todo", ['ngRoute']);

  todo.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'modules/todo/todo.html',
      controller: ToDoController
    });
  }]);

  return todo;
});