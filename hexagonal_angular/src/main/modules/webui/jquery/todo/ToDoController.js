define(['jQuery', 'underscore', 'stubs/tasks'], function ($, _, tasks) {
  'use strict';

  function ToDoController(root) {
    function loadTasks() {
      var taskList = root.find('.task-list'),
          tpl = root.find('#task').html();

      taskList.html('');
      tasks.forEach(function (task) {
        taskList.append(_.template(tpl, {task: task}));
      });
    }

    return {
      loadTasks: loadTasks
    };
  }

  return ToDoController;
});