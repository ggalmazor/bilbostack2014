define(['angular', 'ui/ng/UseCaseApiAdapter', 'ui/ng/todo/ToDoModule'], function (angular, UseCaseApiAdapter, ToDoModule) {
  "use strict";

  return function (useCaseApi, rootElement) {
    var appName = 'app',
        useCaseApiAdapter = UseCaseApiAdapter(useCaseApi);

    angular
        .module(appName, [ToDoModule(useCaseApiAdapter)])
        .run(['$rootScope', '$location', function ($rootScope, $location) {
          useCaseApiAdapter.map('list-tasks', function () {
            return function () {
              $rootScope.$apply(function () {
                $location.path('/list');
              });
            };
          });
          useCaseApiAdapter.map('show-task', function () {
            return function (task) {
              $rootScope.$apply(function () {
                $location.path('/show/' + task.id);
              });
            };
          });
        }]);

    return function () {
      angular.bootstrap(rootElement, [appName]);
    };
  }

});
