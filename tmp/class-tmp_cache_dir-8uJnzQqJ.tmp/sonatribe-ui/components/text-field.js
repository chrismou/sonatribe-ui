define("sonatribe-ui/components/text-field", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    /**
      This is a custom text field that allows i18n placeholders

      @class TextField
      @extends Ember.TextField
      @namespace Discourse
      @module Discourse
    **/

    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.TextField.extend({
      attributeBindings: ["autocorrect", "autocapitalize", "autofocus", "maxLength"],

      placeholder: (function () {
        if (this.get("placeholderKey")) {
          return "";
        } else {
          return "";
        }
      }).property("placeholderKey")
    });
  });