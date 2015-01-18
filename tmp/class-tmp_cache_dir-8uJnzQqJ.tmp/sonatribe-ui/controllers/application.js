define("sonatribe-ui/controllers/application", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];


    __exports__["default"] = Ember.Controller.extend({
      needs: ["modal"],
      eventName: null,
      init: function () {
        this.set("searchContextEnabled", false);
      },
      actions: {
        searchEvent: function () {
          alert(this.get("eventName"));
          //this.transitionTo('posts', );
        } }
    });
  });