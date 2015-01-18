define("sonatribe-ui/tests/routes/application.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/application.js should pass jshint', function() { 
      ok(false, 'routes/application.js should pass jshint.\nroutes/application.js: line 54, col 11, \'$\' is not defined.\nroutes/application.js: line 4, col 8, \'User\' is defined but never used.\nroutes/application.js: line 10, col 44, \'provider\' is defined but never used.\n\n3 errors'); 
    });
  });