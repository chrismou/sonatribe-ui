define("sonatribe-ui/mixins/search-lineup", 
  ["ember","sonatribe-ui/mixins/sonatribe-ajax","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Ajax = __dependency2__["default"];

    __exports__["default"] = Ember.Mixin.create(Ajax, {
      searchLineup: function (slug, term) {
        return this.store.find("listingEvent", { name: term, eventInstanceSlug: slug, Skip: 0, Take: 20 });
      }
    });
  });