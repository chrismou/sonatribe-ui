define("sonatribe-ui/controllers/user-dropdown", 
  ["sonatribe-ui/mixins/has-current-user","sonatribe-ui/controllers/sonatribe","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var HasCurrentUser = __dependency1__["default"];
    var SonatribeController = __dependency2__["default"];
    __exports__["default"] = SonatribeController.extend(HasCurrentUser, {});
  });