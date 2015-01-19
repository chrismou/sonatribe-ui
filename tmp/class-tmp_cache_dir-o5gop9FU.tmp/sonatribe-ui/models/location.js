define("sonatribe-ui/models/location", 
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];

    __exports__["default"] = DS.Model.extend({
      slug: DS.attr("string"),
      name: DS.attr("string"),

      eventInstance: DS.belongsTo("eventInstance"),
      listingEvents: DS.hasMany("listingEvent", { async: true })
    });
  });