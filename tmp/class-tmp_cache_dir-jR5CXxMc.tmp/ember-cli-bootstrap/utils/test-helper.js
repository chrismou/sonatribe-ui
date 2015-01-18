define("ember-cli-bootstrap/utils/test-helper", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = function testHelper(value, options) {
      return new Ember.Handlebars.SafeString('you just used the test-helper with a value of: <b>' + value + '</b>');
    };
  });