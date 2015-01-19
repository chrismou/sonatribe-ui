define("sonatribe-ui/controllers/modal", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Controller.extend({
      initialiseValues: function (params) {
        alert(params);
      }
    });
  });