define("sonatribe-ui/helpers/test-helper", 
  ["ember","ember-cli-bootstrap/utils/test-helper","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var testHelper = __dependency2__["default"];

    __exports__["default"] = Ember.Handlebars.makeBoundHelper(testHelper);
  });