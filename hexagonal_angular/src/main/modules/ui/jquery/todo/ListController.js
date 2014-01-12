define(['jQuery', 'underscore', 'text!ui/jquery/todo/list.html'], function ($, _, template) {
  'use strict';

  function ListController(useCaseApiAdapter, rootElement) {
    function crearTarea() {
      var nombre = $(rootElement).find('input.nombre').val();
      useCaseApiAdapter.execute('crearTarea', [nombre]);
    }

    function init() {
      $(rootElement).html(template);
      $(rootElement).find('button.crear').on('click', crearTarea);
    }

    return init;
  }

  return ListController;
});