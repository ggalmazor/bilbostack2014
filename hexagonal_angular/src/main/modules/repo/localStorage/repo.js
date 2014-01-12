define(['repo/localStorage/taskRepo'], function (TaskRepo) {
  return {
    task: TaskRepo()
  };
});