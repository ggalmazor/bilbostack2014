define(['q', 'domain/task'], function (Q, Task) {
  'use strict';

  function ToDo() {
    var repo;

    function plugUi(ui, element) {
      ui(useCaseApi(), element)();
    }

    function plugRepo(_repo) {
      repo = _repo;
    }

    function useCaseApi() {
      return {
        crearTarea: function (nombre) {
          var newTask = Task(nombre);
          if (!newTask.isValid())
            return Q.when({
              status: "error",
              type: "notify",
              error: "tarea no válida"
            });


          var defer = Q.defer();
          Q.when(repo.task.persist(newTask))
              .then(function (task) {
                defer.resolve({
                  status: "success",
                  type: "transition",
                  target: 'show-task',
                  params: [task]
                });
              }, function (error) {
                defer.resolve({
                  status: "error",
                  type: "notify user",
                  error: error
                });
              });

          return defer.promise;
        }
      };
    }

    return {
      plugUi: plugUi,
      plugRepo: plugRepo
    };
  }

  return ToDo;
});