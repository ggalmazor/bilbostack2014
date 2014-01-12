define(['jQuery', 'underscore', 'stubs/tasks', 'text!webui/jquery/todo/todo.html', 'text!webui/jquery/todo/show-todo.html'], function ($, _, tasks, ListToDoTemplate, ShowToDoTemplate) {
  'use strict';

  function ToDoController(root, api) {
    function cargarTareas() {
      var taskList = root.find('.task-list'),
          tpl = root.find('#task').html();

      taskList.html('');
      tasks.forEach(function (task) {
        taskList.append(_.template(tpl, {task: task}));
      });
    }

    function crearTarea() {
      var nombre = root.find('input.nombre').val();
      api('crearTarea', [nombre]);
    }

    function listadoTareas() {
      root.html(ListToDoTemplate);
      root.find('button.crear').on('click', crearTarea);
    }

    function verTarea(params) {
      var task = params.task;
      console.log(task);
      root.html(ShowToDoTemplate);
      root.find('h1').html(task.name)
    }

    return {
      init: function () {
        listadoTareas()
      },
      views: {
        listado: listadoTareas,
        verTarea: verTarea
      },
      cargarTareas: cargarTareas,
      crearTarea: crearTarea
    };
  }

  return ToDoController;
});