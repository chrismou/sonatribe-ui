define("sonatribe-ui/tests/routes/application.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/application.js should pass jshint', function() { 
      ok(false, 'routes/application.js should pass jshint.\nroutes/application.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/application.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/application.js: line 3, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/application.js: line 4, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/application.js: line 5, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/application.js: line 82, col 1, \'export\' is only available in ES6 (use esnext option).\n\n6 errors'); 
    });
  });