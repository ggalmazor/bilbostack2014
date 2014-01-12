define(function (require) {
  return {
    localStorage: function() {
      return require('repo/localStorage/repo')
    },
    ajax: function() {
      return require('repo/ajax/repo')
    }
  };
});