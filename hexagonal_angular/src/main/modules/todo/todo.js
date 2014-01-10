define([], function () {
  'use strict';

  function ToDo() {
    var webUI;

    function plugWebUI(_webUI, element) {
      webUI = _webUI;
      webUI.bootstrap(element);
    }

    return {
      plugWebUI: plugWebUI
    };
  }

  return ToDo;
});