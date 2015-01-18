define("ember-idx-utils/utils/delay", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Em = __dependency1__["default"];

    var delay = function(ms) {
      ms = ms || 1500;
      return new Em.RSVP.Promise(function(resolve) {
        Em.run.later(this, resolve, ms);
      });
    };

    __exports__["default"] = delay;
  });