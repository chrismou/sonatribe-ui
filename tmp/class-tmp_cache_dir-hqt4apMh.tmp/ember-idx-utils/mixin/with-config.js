define("ember-idx-utils/mixin/with-config", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Em = __dependency1__["default"];

    __exports__["default"] = Em.Mixin.create({
      configName: (function() {
        var config;
        config = this.nearestWithProperty('configName');
        if (config) {
          return config.get('configName');
        } else {
          return 'default';
        }
      }).property(),
      config: (function() {
        return Em.Config.getConfig(this.get('configName'));
      }).property('configName')
    });
  });