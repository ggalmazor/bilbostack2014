(function (require) {
  "use strict";
  require.config({
    paths: {
      'angular': '../../../bower_components/angular/angular',
      'angular-route': '../../../bower_components/angular-route/angular-route',
      'text': '../../../bower_components/requirejs-text/text',
      'jQuery': '../../../bower_components/jquery/jquery',
      'underscore': '../../../bower_components/underscore/underscore'
    },
    shim: {
      'angular': { deps: [], exports: 'angular' },
      'angular-route': {deps: ['angular'], exports: 'lala'},
      'jQuery': { exports: 'jQuery'},
      'underscore': { exports: '_'}
    }
  });

  require(['todo/todo', 'webui/webui'], function (ToDo, webui) {
    var todo = ToDo();
    todo.plugWebUI(webui.angular(), document);


  });
}(require));