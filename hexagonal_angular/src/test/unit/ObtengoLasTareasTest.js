define(['todo/todo', 'q', 'jasmine-as-promised', 'repo/repo'], function (Todo, Q) {
  Q.stopUnhandledRejectionTracking();


  function TestUI() {
    var appAdapter;

    function adaptaResponseDeAppAUI(responseDeApp) {
      return responseDeApp;
    }


    return {
      bootstrap: function () {
      },
      setAppAdapter: function (_appAdapter) {
        appAdapter = _appAdapter;
      },
      crearTarea: function (nombre) {
        return appAdapter
            .crearTarea(nombre)
            .then(function (responseDeApp) {
              return adaptaResponseDeAppAUI(responseDeApp);
            });
      }
    };
  }

  function TestRepolandia(nextId) {
    return {
      task: {
        persist: function (task) {
          task.id = nextId;
          return task;
        }
      }
    };
  }

  function FailingRepo() {
    return {
      task: {
        persist: function () {
          var defer = Q.defer();
          defer.reject(new Error("Ostia puta!"));
          return defer.promise;
        }
      }
    };
  }


  jasmine.getEnv().defaultTimeoutInterval = 100;


  describe("Cocotero", function () {
    it("chuchu", function () {
      var todo = Todo();
      var testAdapter = TestUI();
      var nextId = 1;
      todo.plugUi(testAdapter);
      todo.plugRepo(TestRepolandia(nextId));

      runs(function () {
        return testAdapter.crearTarea("cocotero").then(function (result) {
          expect(result.status).toBe("success");
          expect(result.type).toBe("transition to view");
          expect(result.target).toEqual({
            status: 'view-task',
            id: nextId
          });
        });
      });
    });
    it("cuando el nombre es vacio trololo", function() {
      var todo = Todo();
      var testAdapter = TestUI();
      todo.plugUi(testAdapter);
      todo.plugRepo(TestRepolandia(1));

      runs(function () {
        return testAdapter.crearTarea("").then(function (result) {
          expect(result.status).toBe("error");
          expect(result.type).toBe("notify user");
          expect(result.error).toBe("tarea no válida");
        });
      });
    });
    it("Si el repo falla, eleva el error a la UI", function() {
      var todo = Todo();
      var testAdapter = TestUI();
      todo.plugUi(testAdapter);
      todo.plugRepo(FailingRepo());

      runs(function () {
        return testAdapter.crearTarea("chorizamen").then(function (result) {
          expect(result.status).toBe("error");
          expect(result.type).toBe("notify user");
          expect(result.error).toEqual(new Error("Ostia puta!"));
        });
      });
    })
  });
});