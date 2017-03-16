angular.module('BasicArithmeticApp', [])
    .controller('BasicArithmeticController', function($scope) {
        $scope.result = function() {
            switch (operator) {
            case '+':
                return $scope.a + $scope.b;
                break;
            case '-':
                return $scope.a - $scope.b;
                break;
            case '*':
                return $scope.a * $scope.b;
                break;
            case '/':
                return $scope.a / $scope.b;
                break;
            default:
            }
        };
    });