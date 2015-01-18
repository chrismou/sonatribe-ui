define("sonatribe-ui/mixins/presence", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Mixin.create({
      blank: function (name) {
        return Ember.isEmpty(this[name] || this.get(name));
      },

      present: function (name) {
        return !this.blank(name);
      }
    });
  });