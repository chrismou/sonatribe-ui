define("ember-idx-modal/modal-title", 
  ["ember","ember-idx-utils/mixin/with-config","ember-idx-utils/mixin/style-bindings","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    //(c) 2014 Indexia, Inc.
    var Em = __dependency1__["default"];
    var WithConfigMixin = __dependency2__["default"];
    var StyleBindingsMixin = __dependency3__["default"];

    /**
     * `{{em-modal-title}}` component.
     *
     * The title of the modal
     *
     * @class ModalTitle
     * @public
     */

    __exports__["default"] = Em.Component.extend(WithConfigMixin, StyleBindingsMixin, {
      classNameBindings: ['styleClasses', 'classes'],

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
        return (_ref = this.get('config.modal.titleClasses')) != null ? _ref.join(" ") : void 0;
      }).property(),

      /**
       * Register the title within the modal
       * Note: Expects this title to be the direct descendant of the modal component
       *
       * @method registerInModal
       * @private
       */
      registerInModal: function() {
        return (this.get('parentView').setTitle(this)).on('init');
      }
    });
  });