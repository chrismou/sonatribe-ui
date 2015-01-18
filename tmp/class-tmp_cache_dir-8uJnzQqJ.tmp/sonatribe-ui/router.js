define("sonatribe-ui/router", 
  ["ember","sonatribe-ui/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    var Router = Ember.Router.extend({
      location: config.locationType
    });

    Router.map(function () {
      this.route("user-profile", { path: "/user/:Slug" });

      this.resource("event-profile", { path: "/event/:Slug" }, function () {
        this.route("lineup-viewer", { path: "/" });
      });

      this.route("artist-profile", { path: "/artist/:Slug" });
      this.route("listing-event", { path: "/lineup/:Slug" });
      this.route("sonatribe");

      this.route("admin", { path: "/admin/:Slug" });
      this.route("unauthorized");
      this.route("event-profile/lineup-viewer");
    });

    __exports__["default"] = Router;
  });