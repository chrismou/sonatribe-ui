define("sonatribe-ui/tests/routes/unauthorized.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/unauthorized.js should pass jshint', function() { 
      ok(false, 'routes/unauthorized.js should pass jshint.\nroutes/unauthorized.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/unauthorized.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
    });
  });