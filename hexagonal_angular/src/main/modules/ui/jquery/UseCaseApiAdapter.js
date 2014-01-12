define([], function () {
  function UseCaseAdapter(useCaseApi) {
    var mappings = {};

    function map(useCaseView, uiViewAccessor) {
      mappings[useCaseView] = uiViewAccessor;
    }

    function execute(useCase, args) {
      useCaseApi[useCase]
          .apply(null, args)
          .then(function (response) {
            if (response.type == 'transition')
              mappings[response.target]().apply(null, response.params);
          });
    }

    return {
      map: map,
      execute: execute
    };
  }

  return UseCaseAdapter;
});