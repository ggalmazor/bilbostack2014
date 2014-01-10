define(function (angular) {
  return {
    angular: function () {
      return {
        bootstrap: function (element) {
          require(['angular', 'webui/ng/app'], function (angular) {
            angular.bootstrap(element, ['app']);
          });
        }
      };
    }
  };
});