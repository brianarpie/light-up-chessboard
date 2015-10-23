(function() {

  "use strict";

  angular.module("chessboard", [])
    .config(function($provide) {
      $provide.decorator('$rootScope', function($delegate) {
          // adds to the constructor prototype to allow
          // use in isolate scope
          var proto = $delegate.constructor.prototype;

          proto.subscribe = function(event, listener) {
            var unsubscribe = $delegate.$on(event, listener);
            this.$on('$destroy', unsubscribe);
          };

          proto.publish = function(event, data) {
            $delegate.$emit(event, data);
          };

          return $delegate;
      });
  });

})();
