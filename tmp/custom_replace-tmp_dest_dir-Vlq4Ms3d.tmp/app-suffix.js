/* jshint ignore:start */

define('sonatribe-ui/config/environment', ['ember'], function(Ember) {
  var prefix = 'sonatribe-ui';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("sonatribe-ui/tests/test-helper");
} else {
  require("sonatribe-ui/app")["default"].create({});
}

/* jshint ignore:end */
