define(['jQuery', 'webui/jquery/todo/ToDoController'], function ($, ToDoController, ToDoTemplate) {
  "use strict";

  return function (appAdapter) {
    var controllers = {};
    return {
      controllers: controllers,
      bootstrap: function (root) {
        controllers.todo = ToDoController(root, appAdapter);
        controllers.todo.init();
      }
    };
  }
});