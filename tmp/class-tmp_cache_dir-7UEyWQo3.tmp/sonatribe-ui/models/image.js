define("sonatribe-ui/models/image", 
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];

    __exports__["default"] = DS.Model.extend({
      name: DS.attr("string"),
      artist: DS.belongsTo("artist"),
      fullPath: (function () {
        return Sonatribe.ApiUrl + "/image/" + this.get("name") + "?size=smallsquare";
      }).property()
    });
  });