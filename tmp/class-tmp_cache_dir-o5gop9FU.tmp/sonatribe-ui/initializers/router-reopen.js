define("sonatribe-ui/initializers/router-reopen", 
  ["sonatribe-ui/routes/sonatribe","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var SonatribeRoute = __dependency1__["default"];

    var initialize = function () {
      SonatribeRoute.reopenClass({
        showModal: function (router, name, model) {
          router.controllerFor("modal").set("modalClass", null);

          router.render(name, { into: "modal", outlet: "modalBody" });

          var controller = router.controllerFor(name);
          if (controller) {
            if (model) {
              controller.set("model", model);
            }
            if (controller && controller.onShow) {
              controller.onShow();
            }
            controller.set("flashMessage", null);
          }
        }
      });
    };
    __exports__.initialize = initialize;
    __exports__["default"] = {
      name: "router-reopen",

      initialize: initialize
    };
    /*container, app*/
  });