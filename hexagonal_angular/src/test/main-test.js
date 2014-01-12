(function (window, require) {
  "use strict";
  var allTestFiles, TEST_REGEXP;

  allTestFiles = [];
  TEST_REGEXP = /Test\.js$/;

  Object.keys(window.__karma__.files).forEach(function (file) {
    if (TEST_REGEXP.test(file)) {
      allTestFiles.push(file);
    }
  });

  require({
    // "/base" is the URL from where karma is serving project files
    baseUrl: '/base/src/main/modules',
    paths: {
      'angular': '/base/bower_components/angular/angular',
      'angular-route': '/base/bower_components/angular-route/angular-route',
      'mocks': '/base/bower_components/angular-mocks/angular-mocks',
      'text': '/base/bower_components/requirejs-text/text',
      'jQuery': '/base/bower_components/jquery/jquery',
      'underscore': '/base/bower_components/underscore/underscore',
      'q': '../../../bower_components/q/q',
      'jasmine-as-promised': '/base/bower_components/jasmine-as-promised/src/jasmine-as-promised'
    },
    shim: {
      'angular': { deps: [], exports: 'angular' },
      'angular-route': { deps: ['angular'], exports: 'angular-route' },
      'mocks': { deps: ['angular'], exports: 'mocks' },
      'jQuery': { exports: 'jQuery'},
      'underscore': { exports: '_'}
    }
  }, allTestFiles, function () {
    window.__karma__.start();
  }, function (err) {
    var failedModules = err.requireModules;
    console.log("err", err);

    if (failedModules && failedModules[0]) {
      throw new Error("Module couldn't be loaded: " + failedModules);
    } else {
      throw new Error("Unkown error:" + err);
    }
  });
}(window, require));