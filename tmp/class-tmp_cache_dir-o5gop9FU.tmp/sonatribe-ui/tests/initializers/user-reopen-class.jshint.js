define("sonatribe-ui/tests/initializers/user-reopen-class.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - initializers');
    test('initializers/user-reopen-class.js should pass jshint', function() { 
      ok(false, 'initializers/user-reopen-class.js should pass jshint.\ninitializers/user-reopen-class.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\ninitializers/user-reopen-class.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\ninitializers/user-reopen-class.js: line 4, col 1, \'export\' is only available in ES6 (use esnext option).\ninitializers/user-reopen-class.js: line 17, col 1, \'export\' is only available in ES6 (use esnext option).\n\n4 errors'); 
    });
  });