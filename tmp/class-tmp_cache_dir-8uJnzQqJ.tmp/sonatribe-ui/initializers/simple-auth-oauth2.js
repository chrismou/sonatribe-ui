define("sonatribe-ui/initializers/simple-auth-oauth2", 
  ["simple-auth-oauth2/configuration","simple-auth-oauth2/authenticators/oauth2","simple-auth-oauth2/authorizers/oauth2","sonatribe-ui/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Configuration = __dependency1__["default"];
    var Authenticator = __dependency2__["default"];
    var Authorizer = __dependency3__["default"];
    var ENV = __dependency4__["default"];

    __exports__["default"] = {
      name: "simple-auth-oauth2",
      before: "simple-auth",
      initialize: function (container, application) {
        Configuration.load(container, ENV["simple-auth-oauth2"] || {});
        container.register("simple-auth-authorizer:oauth2-bearer", Authorizer);
        container.register("simple-auth-authenticator:oauth2-password-grant", Authenticator);
      }
    };
  });