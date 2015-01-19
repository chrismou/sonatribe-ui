define("sonatribe-ui/models/user", 
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];

    __exports__["default"] = DS.Model.extend({
      eventsAttending: DS.hasMany("eventInstance", { async: true }),
      slug: DS.attr("string"),
      name: DS.attr("string"),
      username: DS.attr("string"),
      profilePictureUrl: DS.attr("string"),
      auth: DS.attr("string") });
    //images: DS.hasMany('image', { async:true }),
  });