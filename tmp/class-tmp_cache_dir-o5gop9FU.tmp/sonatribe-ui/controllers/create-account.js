define("sonatribe-ui/controllers/create-account", 
  ["ember","sonatribe-ui/mixins/modal-functionality","sonatribe-ui/mixins/presence","sonatribe-ui/controllers/sonatribe","sonatribe-ui/mixins/has-current-user","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var ModalFunctionality = __dependency2__["default"];
    var Presence = __dependency3__["default"];

    var SonatribeController = __dependency4__["default"];
    var HasCurrentUser = __dependency5__["default"];


    __exports__["default"] = SonatribeController.extend(ModalFunctionality, Presence, HasCurrentUser, {
      needs: ["modal/login", "createAccount"],
      uniqueUsernameValidation: null,
      globalNicknameExists: false,
      complete: false,
      accountPasswordConfirm: 0,
      accountChallenge: 0,
      passwordRequired: true,
      formSubmitted: false,
      rejectedEmails: Ember.A([]),
      rejectedPasswords: Ember.A([]),
      prefilledUsername: null,
      userFields: null,
      actions: {
        createAccount: function () {
          var name = this.get("accountName");
          var username = this.get("accountUsername");
          var email = this.get("accountEmail");
          var password = this.get("accountPassword");

          var self = this;

          if (this.blank("accountName") || this.blank("accountEmail") || this.get("passwordRequired") && this.blank("accountPassword")) {
            self.flash("Name, username or password is blank", "error");
            return;
          }

          var currentUser = this.get("currentUser");
          var user = this.store.find("user", currentUser.get("id"));

          user.set("username", username);
          user.set("email", email);
          user.set("name", name);

          user.save();

          return false;
        }
      }
    });
  });