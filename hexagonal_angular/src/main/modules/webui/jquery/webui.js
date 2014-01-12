define(['jQuery', 'webui/jquery/todo/todo'], function ($, Todo) {
  'use strict';

  return function () {
    var modules = {},
        appAdapter;

    function translate(status) {
      var viewMapper = {
        'view-task': modules.todo.controllers.todo.views.verTarea
      };
      return viewMapper[status];
    }

    function api(caseName, args) {
      appAdapter[caseName].apply(null, args)
          .then(function (response) {
            if (response.status == 'success' && response.type == 'transition to view') {
              translate(response.target.status)(response.target.params);
            }
          });
    }

    return {
      bootstrap: function (element) {
        modules.todo = Todo(api);
        modules.todo.bootstrap($(element).find('[ng-view]'));
        console.log("Web UI bootstrapped with a jQuery implementation over " + element + " element");
      },
      setAppAdapter: function (_appAdapter) {
        appAdapter = _appAdapter;
      }
    };
  }
});