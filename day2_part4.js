angular.module('myApp', [])
  .filter('range', function() {
    return function(input, maxval) {
      maxval = parseInt(maxval);

      // print 1..100 using for loop
      for (var i=1; i<=maxval; i++) {
        input.push(i);
      }

      // print 1..100 using while loop
      var i=1;
      while (i <= maxval) {
        input.push(i);
        i++;
      }

      // print 1..100 using do-while loop
      var i=1;
      do {
        input.push(i);
        i++;
      }
      while (i <= 100);

      return input;
    };
  });