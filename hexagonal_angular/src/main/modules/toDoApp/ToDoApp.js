define(['q', 'domain/task', 'toDoApp/AppApi', 'toDoApp/AppApiAdapter'], function (Q, Task, AppApi, AppApiAdapter) {
  'use strict';

  function ToDoApp() {
    var repo;

    function plugUi(uiFactory, element) {
      if (!repo)
        throw new Error("Can't plug UI until repo is plugged");
      uiFactory(AppApiAdapter(AppApi(repo)), element)();
    }

    function plugRepo(_repo) {
      repo = _repo;
    }

    return {
      plugUi: plugUi,
      plugRepo: plugRepo
    };
  }

  return ToDoApp;
});