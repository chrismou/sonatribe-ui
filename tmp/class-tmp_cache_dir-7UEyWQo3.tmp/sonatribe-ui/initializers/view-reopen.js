define("sonatribe-ui/initializers/view-reopen", 
  ["sonatribe-ui/views/view","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var View = __dependency1__["default"];

    var initialize = function () {
      View.reopenClass({});
    };
    __exports__.initialize = initialize;
    __exports__["default"] = {
      name: "view-reopen",

      initialize: initialize
    };
    /* container, app */
  });