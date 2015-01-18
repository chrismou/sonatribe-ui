define("sonatribe-ui/views/search", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.View.extend({
      tagName: "div",
      classNames: ["d-dropdown"],
      elementId: "search-dropdown",
      templateName: "search"
    });
  });