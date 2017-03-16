angular.module("studentApp", [])
  .controller('studentController', function($scope) {
    $scope.student = {
        firstName: "Anija",
        lastName: "Thomas",
       
        fullName: function() {
          var studentObject;
          studentObject = $scope.student;
          return studentObject.firstName + " " + studentObject.lastName;
        }
    };
  });