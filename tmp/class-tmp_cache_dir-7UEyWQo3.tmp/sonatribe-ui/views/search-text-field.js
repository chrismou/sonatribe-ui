define("sonatribe-ui/views/search-text-field", 
  ["sonatribe-ui/components/text-field","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var TextField = __dependency1__["default"];

    __exports__["default"] = TextField.extend({
      placeholder: (function () {
        if (this.get("searchContextEnabled")) {
          return "search init";
        }

        return "search";
      }).property("searchContextEnabled")
    });
  });