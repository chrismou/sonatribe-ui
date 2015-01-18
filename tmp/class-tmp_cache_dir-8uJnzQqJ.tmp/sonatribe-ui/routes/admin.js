define("sonatribe-ui/routes/admin", 
  ["ember","sonatribe-ui/mixins/has-current-user","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var HasCurrentUser = __dependency2__["default"];

    __exports__["default"] = Ember.Route.extend(HasCurrentUser, {
      model: function (params) {
        this.set("currentUser", this.currentUser);
      },
      access: ["Admin"],
      setupController: function (controller, model) {
        this.set("currentUser", this.currentUser);
        this.store.find("event-instance").then(function (result) {
          controller.set("model", result);
        });
      },
      beforeModel: function (transition) {
        var found = false;

        for (var i = 0; i < this.get("access").length; i++) {
          if (this.get("currentUser.Roles").indexOf(this.get("access")[i]) > -1) {
            found = true;
            break;
          }
        }

        if (found) {
          return true;
        }

        // manage the unauthorized attempt
        this.transitionTo("unauthorized"); // or whatever
      }
    });
  });