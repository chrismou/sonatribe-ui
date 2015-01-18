define("sonatribe-ui/views/hide-modal", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.View.extend({
      // No rendering!
      render: Ember.K,

      _hideModal: (function () {
        $("#discourse-modal").modal("hide");
      }).on("didInsertElement")
    });
  });