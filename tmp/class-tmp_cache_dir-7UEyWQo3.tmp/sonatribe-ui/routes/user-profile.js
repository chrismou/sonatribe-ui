define("sonatribe-ui/routes/user-profile", 
  ["ember","sonatribe-ui/mixins/sonatribe-ajax","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Ajax = __dependency2__["default"];

    __exports__["default"] = Ember.Route.extend(Ajax, {
      model: function (params) {
        return this.ajax("Model/User/" + params.Slug, { id: params.Slug }).then(function (response) {
          return response.result;
        });
      }
    });
  });