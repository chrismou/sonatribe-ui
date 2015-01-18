define("sonatribe-ui/mixins/has-current-user", 
  ["ember","sonatribe-ui/models/user","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var User = __dependency2__["default"];

    __exports__["default"] = Ember.Mixin.create({
      currentUser: (function () {
        var user = User.current();
        return user;
      }).property().volatile()
    });
  });