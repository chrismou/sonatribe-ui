define("sonatribe-ui/views/grouped-view", 
  ["ember","sonatribe-ui/mixins/presence","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Presence = __dependency2__["default"];

    __exports__["default"] = Ember.View.extend(Presence, {
      init: function () {
        this._super();
        this.set("context", this.get("content"));

        var templateData = this.get("templateData");
        if (templateData) {
          this.set("templateData.insideGroup", true);
        }
      }
    });
  });