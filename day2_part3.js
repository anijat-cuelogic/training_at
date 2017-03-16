angular.module('myApp', [])
  .filter('range', function() {
    return function(input) {

      // loop which will skip the step where i = 3(used 'continue')
      var text = "";
      var i;
      for (i = 0; i < 10; i++) {
          if (i === 3) { continue; }
          input.push(i);
      }

      // loop with a break when val is 3(used 'break')
      for (i = 0; i < 10; i++) {
        if (i === 3) { break; }
        input.push(i);
      }

      return input;
    };
  });