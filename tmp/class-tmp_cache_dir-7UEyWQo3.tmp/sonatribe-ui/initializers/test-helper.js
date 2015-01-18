define("sonatribe-ui/initializers/test-helper", 
  ["sonatribe-ui/helpers/test-helper","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var testHelper = __dependency1__["default"];

    function initialize() {
      Ember.Handlebars.registerHelper("test-helper", testHelper);
    };
    __exports__.initialize = initialize;
    __exports__["default"] = {
      name: "test-helper",
      initialize: initialize
    };
    /* container, application */
  });