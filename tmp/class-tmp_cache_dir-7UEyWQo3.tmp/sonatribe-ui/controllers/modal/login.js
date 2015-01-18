define("sonatribe-ui/controllers/modal/login", 
  ["ember","sonatribe-ui/mixins/presence","sonatribe-ui/mixins/modal-functionality","sonatribe-ui/mixins/sonatribe-ajax","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Presence = __dependency2__["default"];
    var ModalFunctionality = __dependency3__["default"];
    var Ajax = __dependency4__["default"];

    __exports__["default"] = Ember.Controller.extend(Presence, ModalFunctionality, Ajax, {
      flashMessageChanged: (function () {
        var flashMessage = this.get("flashMessage");
        if (flashMessage) {
          var messageClass = flashMessage.get("messageClass") || "success";
          var $alert = $("#modal-alert").hide().removeClass("alert-error", "alert-success");
          $alert.addClass("alert alert-" + messageClass).html(flashMessage.get("message"));
          $alert.fadeIn();
        }
      }).observes("flashMessage"),
      actions: {
        login: function () {
          var self = this;
          if (this.blank("loginName") || this.blank("loginPassword")) {
            self.flash("Username or password is blank", "error");
            return;
          }

          var promise = this.ajax("auth/credentials?username=" + this.get("loginName") + "&password=" + this.get("loginPassword"), {});

          promise.then(function () {
            self.set("loggedIn", true);
            // Trigger the browser's password manager using the hidden static login form:
            location.reload();
          }, function () {
            // Failed to login
            self.flash("Login error", "error");
            self.set("loggingIn", false);
          });

          return false;
        }
      }
    });
  });