define("sonatribe-ui/helpers/test-breadcrumbs", 
  ["ember","ember-cli-bootstrap/utils/test-breadcrumbs","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var BsBreadcrumbs = __dependency2__["default"];

    //debugger
    __exports__["default"] = Ember.Handlebars.makeBoundHelper(BsBreadcrumbs);
  });