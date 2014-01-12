define(['q', 'domain/task'], function (Q, Task) {
  'use strict';

  function ToDo() {
    var appAdapter, webUI, repo;

    function plugWebUI(_webUI, element) {
      webUI = _webUI;
      webUI.setAppAdapter(appAdapter);
      webUI.bootstrap(element);
    }

    function plugRepo(_repo) {
      repo = _repo;
    }

    appAdapter = {

      crearTarea: function (nombre) {
        var newTask = Task(nombre);
        if (!newTask.isValid())
          return Q.when({
            status: "error",
            type: "notify user",
            error: "tarea no válida"
          });


        var defer = Q.defer();
        Q.when(repo.task.persist(newTask))
            .then(function (task) {
              defer.resolve({
                status: "success",
                type: "transition to view",
                target: {
                  status: 'view-task',
                  params: {
                    task: task
                  }
                }
              });
            }, function(error) {
              defer.resolve({
                status: "error",
                type: "notify user",
                error: error
              });
            });

        return defer.promise;
      }
    };

    return {
      plugWebUI: plugWebUI,
      plugRepo: plugRepo
    };
  }

  return ToDo;
});