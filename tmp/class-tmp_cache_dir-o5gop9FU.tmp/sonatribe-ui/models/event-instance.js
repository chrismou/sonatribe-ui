define("sonatribe-ui/models/event-instance", 
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];

    __exports__["default"] = DS.Model.extend({
      slug: DS.attr("string"),
      modified: DS.attr("string"),
      importId: DS.attr("string"),
      name: DS.attr("string"),
      fromDate: DS.attr("string"),
      toDate: DS.attr("string"),
      locations: DS.hasMany("location", { async: true }),
      usersAttending: DS.hasMany("user", { async: true })
      //images: DS.hasMany('image'),
      //image: DS.belingsTo('image')
    });
  });