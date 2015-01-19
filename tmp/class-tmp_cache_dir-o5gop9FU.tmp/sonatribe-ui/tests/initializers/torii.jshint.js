define("sonatribe-ui/tests/initializers/torii.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - initializers');
    test('initializers/torii.js should pass jshint', function() { 
      ok(false, 'initializers/torii.js should pass jshint.\ninitializers/torii.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\ninitializers/torii.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
    });
  });