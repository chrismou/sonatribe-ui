define("ember-idx-modal/modal-body", 
  ["ember","ember-idx-utils/mixin/with-config","ember-idx-utils/mixin/style-bindings","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    //(c) 2014 Indexia, Inc.
    var Em = __dependency1__["default"];
    var WithConfigMixin = __dependency2__["default"];
    var StyleBindingsMixin = __dependency3__["default"];

    /**
     * `{{em-modal-body}}` component.
     *
     * The body of the modal
     *
     * @class ModalBody
     * @public
     */
    __exports__["default"] = Em.Component.extend(WithConfigMixin, StyleBindingsMixin, {
      classNameBindings: ['styleClasses'],

      /**
       * The CSS classes that will be attached to the DOM element of the modal
       * Classes should be configured externally by using the `config` object.
       *
       * @property styleClasses
       * @private
       * @type String
       */
      styleClasses: (function() {
        var _ref;
        return (_ref = this.get('config.modal.bodyClasses')) != null ? _ref.join(" ") : undefined;
      }).property()
    });
  });