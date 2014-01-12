define(function (require) {
  'use strict';

  return {
    angular: function() {
      return require('ui/ng/NgUiAdapter');
    },
    jquery: function () {
      return require('ui/jquery/JqueryUiAdapter');
    }
  };
});