define("sonatribe-ui/helpers/icon-helper", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    function iconHelper(i) {
      var labelKey;
      var html = "<i class='fa fa-" + i + "'";
      if (labelKey) {
        html += " aria-hidden='true'";
      }
      html += "></i>";
      if (labelKey) {
        html += "<span class='sr-only'>" + labelKey + "</span>";
      }
      return new Handlebars.SafeString(html);
    }

    __exports__.iconHelper = iconHelper;

    __exports__["default"] = Ember.Handlebars.makeBoundHelper(iconHelper);
  });