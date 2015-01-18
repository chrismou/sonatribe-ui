define("sonatribe-ui/helpers/image-helper", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    function imageHelper(model, size) {
      var html = "<img src=\"" + Sonatribe.ApiUrl + "/image/" + model.get("name") + "?size=" + size + "\"  />";
      return new Handlebars.SafeString(html);
    }

    __exports__.imageHelper = imageHelper;__exports__["default"] = Ember.Handlebars.makeBoundHelper(imageHelper);
  });