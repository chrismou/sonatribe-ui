define("sonatribe-ui/initializers/initialize-torii-callback", 
  ["torii/redirect-handler","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var RedirectHandler = __dependency1__["default"];

    __exports__["default"] = {
      name: "torii-callback",
      before: "torii",
      initialize: function (container, app) {
        app.deferReadiness();
        RedirectHandler.handle(window.location.toString())["catch"](function () {
          app.advanceReadiness();
        });
      }
    };
  });