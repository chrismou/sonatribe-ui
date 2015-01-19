define("sonatribe-ui/initializers/config", 
  ["ember","ember-idx-utils/config","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Em = __dependency1__["default"];
    var Config = __dependency2__["default"];

    __exports__["default"] = {
      name: "ember-idx-modal",
      initialize: function () {
        if (!Em.Config) {
          Em.Config = Config = Config.create();
        }

        var defaultConfig = Config.getConfig("bs");
        if (!defaultConfig) {
          Config.addConfig("bs");
          defaultConfig = Config.getConfig("bs");
        }

        defaultConfig.modal = {
          classes: ["em-modal", "modal", "fade"],
          bodyClasses: ["modal-body"],
          titleClasses: ["modal-header"],
          footerClasses: ["modal-footer"]
        };
      }
    };
  });