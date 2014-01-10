(function (require) {
  "use strict";
  require.config({
    paths: {
      'angular': '../../../bower_components/angular/angular',
      'angular-route': '../../../bower_components/angular-route/angular-route'
    },
    shim: {
      'angular': { deps: [], exports: 'angular' },
      'angular-route': {deps: ['angular']}
    }
  });

  require(['webui/webui'], function (webui) {
    webui.angular().bootstrap(document, ["app"]);
  });
}(require));