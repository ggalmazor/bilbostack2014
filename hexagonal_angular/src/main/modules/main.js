(function (require) {
  "use strict";
  require.config({
    paths: {
      'angular': '../../../bower_components/angular/angular',
      'angular-route': '../../../bower_components/angular-route/angular-route',
      'text': '../../../bower_components/requirejs-text/text',
      'jQuery': '../../../bower_components/jquery/jquery',
      'underscore': '../../../bower_components/underscore/underscore',
      'q': '../../../bower_components/q/q'
    },
    shim: {
      'angular': { deps: [], exports: 'angular' },
      'angular-route': {deps: ['angular'], exports: 'lala'},
      'jQuery': { exports: 'jQuery'},
      'underscore': { exports: '_'}
    }
  });

  require(['toDoApp/ToDoApp', 'ui/uiAdapter', 'repo/repo'], function (ToDoApp, webui, repo) {
    var toDoApp = ToDoApp();
    toDoApp.plugRepo(repo.localStorage());
//    toDoApp.plugUi(webui.jquery(), document.getElementById('root'));
    toDoApp.plugUi(webui.angular(), document);
  });
}(require));