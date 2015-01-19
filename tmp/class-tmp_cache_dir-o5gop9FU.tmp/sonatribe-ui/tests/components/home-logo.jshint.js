define("sonatribe-ui/tests/components/home-logo.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - components');
    test('components/home-logo.js should pass jshint', function() { 
      ok(false, 'components/home-logo.js should pass jshint.\ncomponents/home-logo.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\ncomponents/home-logo.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\ncomponents/home-logo.js: line 5, col 37, [\'logo_url\'] is better written in dot notation.\ncomponents/home-logo.js: line 6, col 33, [\'title\'] is better written in dot notation.\n\n4 errors'); 
    });
  });