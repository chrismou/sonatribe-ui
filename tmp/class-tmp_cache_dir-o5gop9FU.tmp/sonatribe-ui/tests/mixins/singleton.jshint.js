define("sonatribe-ui/tests/mixins/singleton.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - mixins');
    test('mixins/singleton.js should pass jshint', function() { 
      ok(false, 'mixins/singleton.js should pass jshint.\nmixins/singleton.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nmixins/singleton.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
    });
  });