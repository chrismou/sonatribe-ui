define("sonatribe-ui/routes/listing-event", 
  ["ember","sonatribe-ui/mixins/sonatribe-ajax","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Ajax = __dependency2__["default"];

    __exports__["default"] = Ember.Route.extend(Ajax, {
      model: function (params) {
        return this.store.find("listingEvent", { slug: params.Slug }).then(function (result) {
          var res = result.get("firstObject");
          return res;
        });
      }
    });
  });