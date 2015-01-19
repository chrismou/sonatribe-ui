define("sonatribe-ui/initializers/initialize-torii-session", 
  ["torii/configuration","torii/bootstrap/session","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var configuration = __dependency1__["default"];
    var bootstrapSession = __dependency2__["default"];

    __exports__["default"] = {
      name: "torii-session",
      after: "torii",

      initialize: function (container) {
        if (configuration.sessionServiceName) {
          bootstrapSession(container, configuration.sessionServiceName);
          container.injection("adapter", configuration.sessionServiceName, "torii:session");
        }
      }
    };
  });