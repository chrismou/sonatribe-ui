define("sonatribe-ui/app", 
  ["ember","ember/resolver","ember/load-initializers","sonatribe-ui/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Resolver = __dependency2__["default"];
    var loadInitializers = __dependency3__["default"];
    var config = __dependency4__["default"];

    Ember.MODEL_FACTORY_INJECTIONS = true;

    var App = Ember.Application.extend({
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix,
      Resolver: Resolver
    });

    loadInitializers(App, config.modulePrefix);


    window.Sonatribe = {};
    Sonatribe.SiteSettings = {
      api_url: "http://dev.festivaltribe.co.uk:1337",
      app_url: "http://dev.festivaltribe.co.uk:4200",

      title: "Sonatribe",
      logo_url: "http://alpha.sonatribe.com/img/logo_simple_small.jpg",
      logo_small_url: "http://alpha.sonatribe.com/img/logo_simple_small.jpg",
      mobile_logo_url: "" };

    __exports__["default"] = App;
  });