define(['q', 'domain/task'], function (Q, Task) {

  function AppApi(repo) {
    function crearTarea(nombre) {
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
              type: "notify",
              error: error
            });
          });

      return defer.promise;
    }

    return {
      crearTarea: crearTarea
    };
  }

  return AppApi;

});