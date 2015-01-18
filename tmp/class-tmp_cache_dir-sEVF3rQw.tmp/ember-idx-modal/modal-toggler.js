define("ember-idx-modal/modal-toggler", 
  ["ember","ember-idx-modal/modal","ember-idx-utils/mixin/with-config","ember-idx-utils/mixin/style-bindings","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    //(c) 2014 Indexia, Inc.
    var Em = __dependency1__["default"];
    var Modal = __dependency2__["default"];
    var WithConfigMixin = __dependency3__["default"];
    var StyleBindingsMixin = __dependency4__["default"];

    /**
     * `{{em-modal-toggler}}` component.
     *
     * A component to toggle the visibility of a modal
     *
     * @class ModalToggler
     * @event on-toggle triggered when the toggler is clicked before changing the visibility of the modal
     *   @param toggler Toggler - This instance of the toggler
     * @public
     */

    __exports__["default"] = Em.Component.extend(WithConfigMixin, StyleBindingsMixin, {
      attributeBindings: ['disabled', 'type'],
      tagName: 'button',
      classNameBindings: ['styleClasses'],
      type: 'button',

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
        return (_ref = this.get('config.modal.togglerClasses')) != null ? _ref.join(" ") : void 0;
      }).property(),

      /**
       * Toggle the visibility of the modal that this toggler controls.
       *
       * @method toggleVisibility
       * @private
       */
      toggleVisibility: (function() {
        this.sendAction('on-toggle', this);
        return this.get('modal').toggleVisibility();
      }).on('click'),

      /**
       * Find the modal view and set it as a `modal` property
       * A toggler can live as a descendant (not neccessarily a direct one) of a modal or outside of the modal chain
       * TODO: Assert modal existance
       * @method modalAsProperty
       */
      modalAsProperty: (function() {
        var modalAsAncestor;
        modalAsAncestor = this.nearestOfType(Modal);
        if (modalAsAncestor) {
          return this.set('modal', modalAsAncestor);
        } else {
          return Em.run.schedule('afterRender', this, function() {
            return this.set('modal', Em.View.views[this.get('modal-id')]);
          });
        }
      }).on('willInsertElement')
    });
  });