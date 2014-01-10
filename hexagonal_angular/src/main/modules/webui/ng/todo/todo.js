define(['angular', 'webui/ng/todo/ToDoController', 'angular-route'], function (angular, ToDoController, lala) {
  'use strict';

  var todo = angular.module('todo', ['ngRoute']);

  todo.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'modules/webui/ng/todo/todo.html',
      controller: ToDoController
    });
  }]);

  return todo;
});