define(function () {
  return {
    angular: function () {
      return {
        bootstrap: function (element) {
          require(['webui/ng/app'], function (app) {
            app.bootstrap(element);
          });
        }
      };
    },
    jquery: function () {
      return {
        bootstrap: function (element) {
          require(['webui/jquery/app'], function (app) {
            app.bootstrap(element);
          });
        }
      };
    }
  };
});