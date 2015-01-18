define("sonatribe-ui/mixins/modal-functionality", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Mixin.create({
      needs: ["modal"],

      flash: function (message, messageClass) {
        this.set("flashMessage", Ember.Object.create({
          message: message,
          messageClass: messageClass
        }));
      }
    });
  });