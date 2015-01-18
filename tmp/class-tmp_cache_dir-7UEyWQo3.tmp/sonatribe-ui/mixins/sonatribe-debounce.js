define("sonatribe-ui/mixins/sonatribe-debounce", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Mixin.create({
      debounce: function (func, wait) {
        var self, args;
        var later = function () {
          func.apply(self, args);
        };

        return function () {
          self = this;
          args = arguments;

          Ember.run.debounce(null, later, wait);
        };
      }
    });
  });