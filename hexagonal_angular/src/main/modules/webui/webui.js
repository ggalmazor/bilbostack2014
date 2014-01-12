define(function (require) {
  'use strict';

  return {
    angular: {},
    jquery: function () {
      return require('webui/jquery/webui')();
    }
  };
});