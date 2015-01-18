define("sonatribe-ui/helpers/computed", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    function computed() {
      return Ember.computed(function () {
        return Sonatribe.SiteSettings[name];
      }).property();
    }

    __exports__.computed = computed;

    __exports__["default"] = Ember.Handlebars.makeBoundHelper(computed);
  });