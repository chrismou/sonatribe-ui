define("sonatribe-ui/controllers/sonatribe", 
  ["ember","sonatribe-ui/mixins/has-current-user","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var HasCurrentUser = __dependency2__["default"];


    __exports__["default"] = Ember.Controller.extend(HasCurrentUser, {
      api_url: Sonatribe.SiteSettings.api_url,
      app_url: Sonatribe.SiteSettings.app_url,
      isAdmin: (function () {
        var found = false;

        if (this.get("currentUser.Roles") && this.get("currentUser.Roles").indexOf("Admin") > -1) {
          found = true;
        }

        return found;
      }).property(),
      log_out_link: Sonatribe.SiteSettings.api_url + "auth/logout/?continue=" + Sonatribe.SiteSettings.app_url,
      facebook_login_url: Sonatribe.SiteSettings.api_url + "auth/facebook/?continue=" + Sonatribe.SiteSettings.app_url,
      twitter_login_url: Sonatribe.SiteSettings.api_url + "auth/twitter/?continue=" + Sonatribe.SiteSettings.app_url,
      image_format_url: Sonatribe.SiteSettings.api_url + "image/"
    });
  });