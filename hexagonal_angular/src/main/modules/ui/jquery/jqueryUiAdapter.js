define(['jQuery', 'ui/jquery/todo/ToDoModule'], function ($, ToDoModule) {
  'use strict';

  return function (appApiAdapter, rootElement) {
    var modules = {
          todo: ToDoModule(appApiAdapter, rootElement)
        };

    appApiAdapter.addTransitionCallback('list-tasks', function () {
      return modules.todo.controllers.list;
    });
    appApiAdapter.addTransitionCallback('show-task', function () {
      return modules.todo.controllers.show;
    });

    return modules.todo.init;
  }
});