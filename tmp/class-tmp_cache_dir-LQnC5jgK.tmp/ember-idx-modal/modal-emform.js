define("ember-idx-modal/modal-emform", 
  ["ember","ember-idx-modal/modal-form","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    //(c) 2014 Indexia, Inc.
    var Em = __dependency1__["default"];
    var FormModal = __dependency2__["default"];

    __exports__["default"] = FormModal.extend({
      classNameBindings: ['form'],
      attributeBindings: ['role'],
      role: 'form',
      model: void 0,
      submit_button: false
    });
  });