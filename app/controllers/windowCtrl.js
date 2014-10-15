var app = angular.module('LaLuzDeAjedrez');
// debugger;
app.controller('WindowController', ['$scope', 
  function($scope) {

    $scope.detailedView = function(option) {
      console.log(option)
      if (option) {
        $scope.opacity_chart = function(count) {
          return {
            r: count > 0 ? 0 : 255,
            g: 0,
            b: count < 0 ? 0 : 255,
            a: Math.abs(count) * 0.1 + 5
          }
        }
        return {
          r: 0
        }
        $scope.opacity_chart = function(heatLevel) {
          switch(heatLevel) {
            case -6:
              return {r: 255, g: 0, b: 0, a: 0.65};
            case -5:
              return {r: 255, g: 0, b: 0, a: 0.55};
            case -4:
              return {r: 255, g: 0, b: 0, a: 0.45};
            case -3:
              return {r: 255, g: 0, b: 0, a: 0.35};
            case -2:
              return {r: 255, g: 0, b: 0, a: 0.25};
            case -1:
              return {r: 255, g: 0, b: 0, a: 0.15};
            case 0:
              return {r: 255, g: 0, b: 255, a: 0.35};
            case 1:
              return {r: 0, g: 0, b: 255, a: 0.15};
            case 2:
              return {r: 0, g: 0, b: 255, a: 0.25};
            case 3:
              return {r: 0, g: 0, b: 255, a: 0.35};
            case 4:
              return {r: 0, g: 0, b: 255, a: 0.45};
            case 5:
              return {r: 0, g: 0, b: 255, a: 0.55};
            case 6:
              return {r: 0, g: 0, b: 255, a: 0.65};
            default:
              return {r: 255, g: 255, b: 255, a:0};
          }
        }
      } else {

      }
    } 
  }
]);