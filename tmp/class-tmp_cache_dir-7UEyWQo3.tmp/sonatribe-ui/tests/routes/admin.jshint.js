define("sonatribe-ui/tests/routes/admin.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/admin.js should pass jshint', function() { 
      ok(false, 'routes/admin.js should pass jshint.\nroutes/admin.js: line 5, col 21, \'params\' is defined but never used.\nroutes/admin.js: line 9, col 44, \'model\' is defined but never used.\nroutes/admin.js: line 15, col 27, \'transition\' is defined but never used.\n\n3 errors'); 
    });
  });