(function() {

  "use strict";

  angular.module('chess', ['ngRoute']);

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['chess']);
  });

})();
