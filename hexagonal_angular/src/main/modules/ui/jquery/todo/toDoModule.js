define(['jQuery', 'ui/jquery/todo/ListController', 'ui/jquery/todo/ShowController'], function ($, ListController, ShowController) {
  "use strict";

  return function (useCaseApiAdapter, rootElement) {
    var controllers = {
      list: ListController(useCaseApiAdapter, rootElement),
      show: ShowController(useCaseApiAdapter, rootElement)
    };

    return {
      init: controllers.list,
      controllers: controllers
    };
  };
});