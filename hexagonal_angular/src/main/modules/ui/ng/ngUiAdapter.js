define(['angular', 'ui/ng/todo/ToDoModule'], function (angular, ToDoModule) {
  "use strict";

  return function (appApiAdapter, rootElement) {
    var appName = 'app';

    angular
        .module(appName, [ToDoModule(appApiAdapter)])
        .run(['$rootScope', '$location', function ($rootScope, $location) {
          appApiAdapter.addTransitionCallback('list-tasks', function () {
            return function () {
              $rootScope.$apply(function () {
                $location.path('/list');
              });
            };
          });
          appApiAdapter.addTransitionCallback('show-task', function () {
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
