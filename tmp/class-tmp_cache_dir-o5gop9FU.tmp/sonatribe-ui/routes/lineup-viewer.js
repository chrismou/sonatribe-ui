define("sonatribe-ui/routes/lineup-viewer", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Route.extend({
      needs: "event-profile",
      model: function (params) {
        var parentmodel = this.modelFor("eventProfile");
        return this.store.find("listingEvent", { eventinstanceSlug: parentmodel.eventProfile.slug, skip: 0, take: 20 }).then(function (results) {
          return results;
        });
      },
      actions: {
        toggleAttendance: function (m) {
          var id = m.get("id");
          var toggle = !m.get("currentUserAttending");

          this.store.find("listingEvent", id).then(function (model) {
            model.set("currentUserAttending", toggle);
            model.save();
          });
        }
      }
    });
  });