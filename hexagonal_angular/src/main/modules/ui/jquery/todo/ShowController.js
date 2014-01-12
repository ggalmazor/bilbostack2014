define(['jQuery', 'underscore', 'text!ui/jquery/todo/show.html'], function ($, _, template) {
  'use strict';

  function ShowController(useCaseApiAdapter, rootElement) {
    function init(task) {
      $(rootElement).html(template);
      $(rootElement).find('h1').html(task.name)
    }

    return init;
  }

  return ShowController;
});