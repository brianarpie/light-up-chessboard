(function() {

  "use strict";

  var app = angular.module('LaLuzDeAjedrez');

  app.service('PgnMoveService', [function() {
    
    this.testService = function(data) {
      console.log('service works!')
      console.log('passed data : ', data)
    };

  }]);
  
})();
