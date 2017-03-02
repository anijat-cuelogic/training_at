angular.module('BasicArithmeticApp', [])
    .controller('BasicArithmeticController', function($scope) {
        $scope.result = function() {
            if ($scope.operator == '+') {
                return $scope.a + App$scope.b;
            }
            if ($scope.operator == '-') {
                return $scope.a - $scope.b;
            }
            if ($scope.operator == '*') {
                return $scope.a * $scope.b;
            }
            if ($scope.operator == '/') {
                return $scope.a / $scope.b;
            }
        };
    });