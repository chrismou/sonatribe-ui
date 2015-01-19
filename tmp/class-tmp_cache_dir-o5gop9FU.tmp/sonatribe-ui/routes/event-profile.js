define("sonatribe-ui/routes/event-profile", 
  ["ember","sonatribe-ui/mixins/sonatribe-ajax","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Ajax = __dependency2__["default"];

    __exports__["default"] = Ember.Route.extend(Ajax, {
      model: function (params) {
        this.set("slug", params.Slug);
        return Ember.RSVP.hash({
          eventProfile: this.ajax("EventInstances/" + params.Slug, { id: params.Slug }).then(function (response) {
            return response.eventInstances[0];
          })
        });
      } });
  });