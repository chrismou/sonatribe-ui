define("sonatribe-ui/routes/application", 
  ["ember","sonatribe-ui/routes/sonatribe","simple-auth/mixins/application-route-mixin","sonatribe-ui/models/user","sonatribe-ui/mixins/has-current-user","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var SonatribeRoute = __dependency2__["default"];
    var ApplicationRouteMixin = __dependency3__["default"];
    var User = __dependency4__["default"];
    var HasCurrentUser = __dependency5__["default"];

    var ApplicationRoute = SonatribeRoute.extend(ApplicationRouteMixin, HasCurrentUser, {
      actions: {
        // action to trigger authentication with Torii
        authenticateFacebook: function (provider) {
          var rte = this;

          this.get("session").authenticate("simple-auth-authenticator:torii", "facebook-connect").then(function () {
            var accessToken = rte.get("session").get("content").accessToken;

            Ember.$.ajax({
              url: Sonatribe.SiteSettings.api_url + "/auths/facebook_access_token?code=" + accessToken,
              dataType: "json",
              success: function (authResponse) {
                console.log(authResponse);
                var user = rte.store.find("user", { id: authResponse.auth.user });

                rte.set("currentUser", user);

                if (user.get("username") === undefined) {
                  rte.send("autoLogin", "createAccount", function () {
                    rte.controllerFor("createAccount").set("passwordRequired", false);
                    SonatribeRoute.showModal(rte, "createAccount");
                  });
                }
              },
              error: function (err) {
                console.log(err);
              }
            });
          });
        },

        showLogin: function () {
          var self = this;
          this.send("autoLogin", "login", function () {
            SonatribeRoute.showModal(self, "login");
            self.controllerFor("login").resetForm();
          });
        },

        showModal: function () {
          $("#discourse-modal").modal("show");
        },

        autoLogin: function (modal, onFail) {
          onFail();
        },
        closeModal: function () {
          this.render("hide-modal", { into: "modal", outlet: "modalBody" });
        },
        showCreateAccount: function () {
          var self = this;

          self.send("autoLogin", "createAccount", function () {
            self.controllerFor("createAccount").set("passwordRequired", true);
            SonatribeRoute.showModal(self, "createAccount");
          });
        },
        createAccount: function () {
          //var createAccountController = this.get('controllers.createAccount');
          //createAccountController.resetForm();
          this.send("showCreateAccount");
        } }
    });

    Ember.RSVP.EventTarget.mixin(ApplicationRoute);
    __exports__["default"] = ApplicationRoute;
  });