define("sonatribe-ui/controllers/index", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Controller.extend({
      actions: {
        searchEvent: function () {
          alert("clicked!");
        }
      }
    });
  });