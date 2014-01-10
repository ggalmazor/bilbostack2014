define(['angular', 'webui/ng/todo/todo'], function (angular) {
  "use strict";

  return {
    bootstrap: function (element) {
      var appName = "app";

      angular.module(appName, ['todo']);
      angular.bootstrap(element, [appName]);

      console.log("Web UI bootstrapped with an AngularJS implementation over " + element + " element");
      return {};
    }
  };
});
