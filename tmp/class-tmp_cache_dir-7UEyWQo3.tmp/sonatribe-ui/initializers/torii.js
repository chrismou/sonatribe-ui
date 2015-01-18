define("sonatribe-ui/initializers/torii", 
  ["sonatribe-ui/authenticators/torii","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Authenticator = __dependency1__["default"];

    __exports__["default"] = {
      name: "sonatribe-auth-torii",
      before: "simple-auth",
      after: "torii",
      initialize: function (container) {
        var torii = container.lookup("torii:main");
        var authenticator = Authenticator.create({ torii: torii });
        container.register("sonatribe-auth-authenticator:torii", authenticator, { instantiate: false });
      }
    };
  });