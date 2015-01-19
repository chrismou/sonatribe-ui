define("sonatribe-ui/initializers/simple-auth", 
  ["simple-auth/configuration","simple-auth/setup","sonatribe-ui/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var Configuration = __dependency1__["default"];
    var setup = __dependency2__["default"];
    var ENV = __dependency3__["default"];

    __exports__["default"] = {
      name: "simple-auth",
      initialize: function (container, application) {
        Configuration.load(container, ENV["simple-auth"] || {});
        setup(container, application);
      }
    };
  });