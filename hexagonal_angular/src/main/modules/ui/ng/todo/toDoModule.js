define(['angular', 'ui/ng/todo/ListController', 'ui/ng/todo/ShowController', 'angular-route'], function (angular, ListController, ShowController) {
  'use strict';

  return function (useCaseApiAdapter) {
    var moduleName = 'todo';

    angular
        .module(moduleName, ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
          $routeProvider.when('/list', {
            templateUrl: 'modules/ui/ng/todo/list.html',
            controller: ListController(useCaseApiAdapter)
          });
          $routeProvider.when('/show/:id', {
            templateUrl: 'modules/ui/ng/todo/show.html',
            controller: ShowController(useCaseApiAdapter)
          });
          $routeProvider.otherwise({redirectTo: '/list'})
        }]);

    return moduleName;
  }
});