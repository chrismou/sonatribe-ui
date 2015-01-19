define("sonatribe-ui/controllers/admin", 
  ["ember","sonatribe-ui/mixins/has-current-user","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var HasCurrentUser = __dependency2__["default"];

    __exports__["default"] = Ember.Controller.extend(HasCurrentUser, {
      actions: {
        createNew: function () {
          var ei = this.store.createRecord("eventInstance", {
            name: "test"
          });
          ei.save();
        }
      }
    });
  });