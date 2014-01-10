define(['jQuery', 'webui/jquery/todo/todo'], function ($, todo) {
  return {
    bootstrap: function (element) {
      todo.bootstrap($(element).find('[ng-view]'));
      console.log("Web UI bootstrapped with a jQuery implementation over " + element + " element");
    }
  };
});