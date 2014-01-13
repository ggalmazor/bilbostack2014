define([], function () {
  function nullCallback() {
  }

  function AppApiAdapter(appApi) {
    var transitionCallbacks = {};

    function addTransitionCallback(targetView, callback) {
      transitionCallbacks[targetView] = callback;
    }

    function getResponseCallback(response) {
      if (response.type == 'transition' && !!transitionCallbacks[response.target])
        return transitionCallbacks[response.target]();
      return nullCallback;
    }

    function execute(useCase, args) {
      appApi[useCase]
          .apply(null, args)
          .then(function (response) {
            getResponseCallback(response).apply(null, response.params);
          });
    }

    return {
      addTransitionCallback: addTransitionCallback,
      execute: execute
    };
  }

  return AppApiAdapter;
});