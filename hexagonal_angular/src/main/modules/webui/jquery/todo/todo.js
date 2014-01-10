define(['jQuery', 'webui/jquery/todo/ToDoController', 'text!webui/jquery/todo/todo.html'], function ($, ToDoController, ToDoTemplate) {
  "use strict";

  return {
    bootstrap: function (root) {
      var ctrl = ToDoController(root);
      root.html(ToDoTemplate);
      root.find('button').on('click', ctrl.loadTasks);
    }
  };
});