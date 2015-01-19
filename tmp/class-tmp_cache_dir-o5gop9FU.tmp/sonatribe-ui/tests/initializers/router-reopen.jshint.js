define("sonatribe-ui/tests/initializers/router-reopen.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - initializers');
    test('initializers/router-reopen.js should pass jshint', function() { 
      ok(false, 'initializers/router-reopen.js should pass jshint.\ninitializers/router-reopen.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\ninitializers/router-reopen.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\ninitializers/router-reopen.js: line 24, col 1, \'export\' is only available in ES6 (use esnext option).\n\n3 errors'); 
    });
  });