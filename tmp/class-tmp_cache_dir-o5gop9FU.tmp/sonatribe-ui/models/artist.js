define("sonatribe-ui/models/artist", 
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];

    __exports__["default"] = DS.Model.extend({
      slug: DS.attr("string"),
      name: DS.attr("string"),
      images: DS.hasMany("image", { async: true }),
      listingEvent: DS.belongsTo("listingEvent") });
  });