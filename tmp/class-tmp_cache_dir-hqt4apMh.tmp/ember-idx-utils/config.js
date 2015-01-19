define("ember-idx-utils/config", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Em = __dependency1__["default"];

    __exports__["default"] = Em.Namespace.extend({
      _configs: Em.Object.create(),
      getConfig: function(name) {
        var config;
        config = this._configs.get(name);
        return config;
      },
      addConfig: function(name, config) {
        var defaultConfig, newConfig;
        defaultConfig = this._configs.get('default');
        newConfig = Em.Object.create(config);
        newConfig = Em.$.extend(true, newConfig, defaultConfig);
        return this._configs.set(name, newConfig);
      }
    });
  });