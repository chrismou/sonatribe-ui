define("sonatribe-ui/initializers/user-reopen-class", 
  ["sonatribe-ui/models/user","sonatribe-ui/mixins/singleton","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var User = __dependency1__["default"];
    var Singleton = __dependency2__["default"];

    var initialize = function (container) {
      User.reopenClass(Singleton, {
        createCurrent: function () {
          var userJson = null; //PreloadStore.get('currentUser');
          if (userJson) {
            var store = container.lookup("store:main");
            return store.push("user", userJson);
          }
          return null;
        } });
    };
    __exports__.initialize = initialize;
    __exports__["default"] = {
      name: "user-reopen-class",

      initialize: initialize
    };
  });