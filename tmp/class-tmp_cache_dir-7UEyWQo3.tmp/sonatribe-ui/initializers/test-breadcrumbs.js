define("sonatribe-ui/initializers/test-breadcrumbs", 
  ["sonatribe-ui/helpers/test-breadcrumbs","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var testHelper = __dependency1__["default"];

    function initialize() {
      //debugger
      Ember.Handlebars.registerHelper("test-breadcrumbs", testHelper);
    };
    __exports__.initialize = initialize;
    __exports__["default"] = {
      name: "test-breadcrumbs",
      initialize: initialize
    };
    /* container, application */
  });