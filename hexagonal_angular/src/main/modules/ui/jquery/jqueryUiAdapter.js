define(['jQuery', 'ui/jquery/UseCaseApiAdapter', 'ui/jquery/todo/ToDoModule'], function ($, UseCaseApiAdapter, ToDoModule) {
  'use strict';

  return function (useCaseApi, rootElement) {
    var useCaseApiAdapter = UseCaseApiAdapter(useCaseApi),
        modules = {
          todo: ToDoModule(useCaseApiAdapter, rootElement)
        };

    useCaseApiAdapter.map('list-tasks', function () {
      return modules.todo.controllers.list;
    });
    useCaseApiAdapter.map('show-task', function () {
      return modules.todo.controllers.show;
    });

    return modules.todo.init;
  }
});