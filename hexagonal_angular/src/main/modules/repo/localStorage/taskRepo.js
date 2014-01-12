define([], function () {
  return function () {
    var storage = [];


    return {
      persist: function (task) {
        task.id = storage.length + 1;
        storage.push(task);
        return task;
      }
    };
  }
});