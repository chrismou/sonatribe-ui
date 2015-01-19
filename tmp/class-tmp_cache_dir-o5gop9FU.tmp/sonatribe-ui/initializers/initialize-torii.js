define("sonatribe-ui/initializers/initialize-torii", 
  ["torii/bootstrap/torii","torii/configuration","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var bootstrapTorii = __dependency1__["default"];
    var configuration = __dependency2__["default"];

    var initializer = {
      name: "torii",
      initialize: function (container, app) {
        bootstrapTorii(container);

        // Walk all configured providers and eagerly instantiate
        // them. This gives providers with initialization side effects
        // like facebook-connect a chance to load up assets.
        for (var key in configuration.providers) {
          if (configuration.providers.hasOwnProperty(key)) {
            container.lookup("torii-provider:" + key);
          }
        }

        app.inject("route", "torii", "torii:main");
      }
    };

    if (window.DS) {
      initializer.after = "store";
    }

    __exports__["default"] = initializer;
  });