define(function () {
  'use strict';
  return function (name) {
    var done = false;

    return {
      name: name,
      isDone: function () {
        return !!done;
      }
    };
  };
});