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
define("ember-idx-modal/modal-confirm-with-reason", 
  ["ember-idx-modal/modal-confirm","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    //(c) 2014 Indexia, Inc.
    var ModalConfirm = __dependency1__["default"];

    /*
     * A confirmation modal with a reason
     * @class ModalConfirmWithReason
     */
    __exports__["default"] = ModalConfirm.extend({
      reasonModal: true,

      /*
       * If true a reason must be selected
       */
      required: true,

      /*
       * Add '--select--' option
       */
      'add-select-option': true,

      /*
       * Reason options
       */
      reasons: void 0,

      /*
       * If true, another reason 'other' will be added.
       * When user selects 'other', a textbox will be visibile to input the reason
       */
      other: true,

      /*
       * The chosen reason
       */
      reason: void 0
    });
  });
define("ember-idx-modal/modal-confirm", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    //(c) 2014 Indexia, Inc.
    var Em = __dependency1__["default"];

    /**
     * A confirmation modal with 'Yes' & 'No' buttons
     * When 'no' is pressed the modal is just closed.
     * When 'yes' is pressed an action bound to the action on the controller set in the `confirm` property is invoked, 
     * giving the controller a chance to decide whether to close the modal or not.
     *
     * @class ModalConfirm
     */
    __exports__["default"] = Em.Component.extend({
      /**
       * Bound to the action on the controller to be invoked when the 'yes' button is pressed.
       * @property confirm
       * @public
       */
      confirm: "confirm",

      /**
       * The default title of the modal if not set otherwise.
       *
       * @property title
       * @public
       */
      title: 'Please confirm',

      /**
       * The default message of the modal if not set otherwise.
       *
       * @property message
       * @public
       */
      message: 'Please press Yes to confirm the operation.',
      'modal-title-classes': '',
      'cancel-button-title': 'No',
      'cancel-button-icons': 'fa fa-thumbs-o-down',
      'cancel-button-classes': 'btn btn-primary',
      'submit-button-classes': 'btn btn-default',
      'submit-button-title': 'Yes',
      'submit-button-submitting-title': 'Submitting...',
      'submit-button-default-icons': 'fa fa-thumbs-o-up',
      'submit-button-execute-icons': 'fa fa-spinner fa-spin',
      actions: {

        /**
         * Invoked when the user clicks the "Yes" button, triggers an action on the controller.
         * 
         * @method confirmPressed
         * @private
         */
        confirmPressed: function(setPromise) {
          return this.sendAction('confirm', setPromise);
        }
      }
    });
  });
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
define("ember-idx-modal/modal-footer", 
  ["ember","ember-idx-utils/mixin/with-config","ember-idx-utils/mixin/style-bindings","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    //(c) 2014 Indexia, Inc.
    var Em = __dependency1__["default"];
    var WithConfigMixin = __dependency2__["default"];
    var StyleBindingsMixin = __dependency3__["default"];

    /**
     * `{{em-modal-footer}}` component.
     *
     * The footer of the modal
     *
     * @class ModalFooter
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
        return (_ref = this.get('config.modal.footerClasses')) != null ? _ref.join(" ") : void 0;
      }).property()
    });
  });
define("ember-idx-modal/modal-form", 
  ["ember","ember-idx-modal/modal","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    //(c) 2014 Indexia, Inc.
    var Em = __dependency1__["default"];
    var Modal = __dependency2__["default"];

    /**
     * A flavour of a {{#crossLink "Modal}}Modal{{/crossLink}} that handles form submission right.
     * @class ModalForm
     */
    __exports__["default"] = Modal.extend({
      tagName: 'form',
      attributeBindings: ['in-async'],
      'in-async': null,
      'close-if-error': false,
      submitted: false,
      error: null,
      layoutName: 'components/em-modal',

      /**
       * Handle form submit event.
       * Submit the form, if the event returns a promise, then wait for the promise to be fulfilled first before
       * closing the modal, if the promise returned an error, then the `error` property will be set with the given error object of the
       * promise, when error occurs, the modal will only get closed if the `close-if-error` property isn't set to false
       *
       * @method submitForm
       * @private
       */
      submitForm: (function(e) {
        e.preventDefault();
        this.sendAction('on-submit', this, e);
        this.set('submitted', true);
        if (e.promise && "function" === typeof e.promise.then) {
          this.set('in-async', 'true');
          return e.promise.then((function(_this) {
            return function(r) {
              _this.set('in-async', null);
              return _this.close();
            };
          })(this), (function(_this) {
            return function(err) {
              _this.set('in-async', null);
              _this.set('error', err);
              if (_this.get('close-if-error')) {
                return _this.close();
              }
            };
          })(this));
        } else {
          return this.close();
        }
      }).on('submit'),
      close: function() {
        this.set('error', null);
        if (!this.get('submitted')) {
          this.sendAction('on-cancel', this);
        }
        return this._super.apply(this, arguments);
      }
    });
  });
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
define("ember-idx-modal/modal", 
  ["ember","ember-idx-utils/mixin/with-config","ember-idx-utils/mixin/style-bindings","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    //(c) 2014 Indexia, Inc.
    var Em = __dependency1__["default"];
    var WithConfigMixin = __dependency2__["default"];
    var StyleBindingsMixin = __dependency3__["default"];

    /**
     * `{{em-modal}}` component.
     *
     * Define a modal component that can be opened and closed, the modal visibility is controlled by the 
     * {{#crossLink "ModalToggler"}}ModalToggler{{/crossLink}} component.
     *
     * ```handlebars
     * {{#em-modal id="modal1"}}
     *   {{#em-modal-title}}
     *     {{#em-modal-toggler}}<span>&times;</span>{{/em-modal-toggler}}
     *        <h4 class="modal-title">I'm a modal title</h4>
     *    {{/em-modal-title}}
     *    {{#em-modal-body}}
     *        One fine body…
     *    {{/em-modal-body}}
     *    {{#em-modal-footer}}
     *    {{#em-modal-toggler}}Close{{/em-modal-toggler}}
     *    {{/em-modal-footer}}
     * {{/em-modal}}
     * {{#em-modal-toggler modal-id="modal1"}}Click me!{{/em-modal-toggler}}
     * ```
     *
     * @class Modal
     * @event will-open
     * @event did-open
     * @event will-close
     * @public
     */

    __exports__["default"] = Em.Component.extend(WithConfigMixin, StyleBindingsMixin, {
      /**
       * Properties bound as attributes the DOM element.
       * see documentation per property.
       * @property panels
       * @private
       * @type Array
       */
      attributeBindings: ['is-open', 'did-open', 'tabindex'],
      classNameBindings: ['styleClasses', 'styleOpenningClasses'],
      styleBindings: ['display'],

      /**
       * Define the tabindex DOM property.
       * Required otherwise no keyDown events
       * @property tabindex
       */
      tabindex: 0,

      /**
       * The CSS classes that will be attached to the DOM element of the modal
       * Classes should be configured externally by using the `config` object.
       * @property styleClasses
       * @private
       * @type String
       */
      styleClasses: (function() {
        var _ref;
        return (_ref = this.get('config.modal.classes')) != null ? _ref.join(" ") : void 0;
      }).property('config.modal.classes'),

      /**
       * The class name that will be set when the modal gets opened
       * @property styleOpenningClasses
       * @public
       */
      styleOpenningClasses: (function() {
        if (this.get('did-open')) {
          return "in";
        } else {
          return "";
        }
      }).property('did-open'),

      /*
       * The CSS `display` property state.
       * @property display
       * @public
       */
      display: (function() {
        if (this.get('did-open')) {
          return 'block';
        } else {
          return 'none';
        }
      }).property('did-open'),

      /**
       * `show` property is bound to the DOM element as an attribute.
       * This property is set to true immediately when the `toggleVisibility` method is invoked.
       *
       * This property can be used to start a transitioning effect, for example:
       * ```css
       *   em-modal[show] {
       *     opacity: 0;
       *     transition: opacity 100ms ease;
       *   }
       * ```
       * 
       * The transition effect should be ended when the modal is gets visible, see the property `shown` for more info.
       * @property opened
       * @see 'did-open'
       * @private
       */
      'is-open': false,

      /**
       * A property bound to the DOM element that indicates that the modal has been made visible to the user. 
       * (after the DOM element was set with `display: block;`)
       *
       * This proeprty can be used by CSS to end a transitioning effect by setting the CSS `opacity` to a higher number, for example:
       *
       * ```css
       *   em-modal[shown] {
       *     opacity: 1;
       *   }
      }
       * ```
       * @property did-open
       * @private
       */
      'did-open': false,

      /**
       * Open modal and make it visible.
       * @method open
       * @public
       */
      open: function() {
        this.trigger('show');
        this.sendAction('on-show', this);
        this.set('is-open', 'true');
        return Em.run.schedule('afterRender', this, function() {
          this.set('did-open', 'true');
          this.trigger('shown');
          return Em.run.schedule('afterRender', this, function() {
            return this.$().focus();
          });
        });
      },

      /**
       * Close the modal by making it invisible.
       * @method close
       * @public
       */
      close: function() {
        this.trigger('hide');
        this.sendAction('on-hide', this);
        this.set('is-open', void 0);
        return this.set('did-open', void 0);
      },

      /**
       * Toggle the visibility of the modal based on its current state.
       * @method toggleVisibility
       * @public
       */
      toggleVisibility: function() {
        if (this.get('is-open')) {
          return this.close();
        } else {
          return this.open();
        }
      },

      /**
       * Set the title of the modal.
       * @method setTitle
       * @private
       * @type ModalTitle
       */
      setTitle: function(title) {
        return this.set('title', title);
      },

      /**
       * Set the toggler of the modal
       * @method setToggler
       * @private
       * @type ModalToggler
       */
      setToggler: function(toggler) {
        return this.set('toggler', toggler);
      },

      /**
       * Close the modal if the user clicks outside of the modal space.
       * @method closeIfClickedOutside
       * @private
       */
      closeIfClickedOutside: (function(e) {
        if (e.target !== this.get('element')) {
          return;
        }
        return this.close();
      }).on('click'),

      /**
       * Handle keyboard events
       * @method handleKeyboard
       * @private
       */
      handleKeyboard: (function(e) {
        switch (e.keyCode) {
          case 27:
            return this.close();
        }
      }).on('keyDown'),

      /**
       * Consumer can bind this property for a more fine grained control over when the modal is opened,
       * This is good for situations where openning the modal via the `toggler` is not enough.
       *
       * @property open-if
       * @public
       */
      'open-if': false,

      /**
       * observers the `open-if` property, if set to true, then open the modal.
       * @method openIf
       * @private
       */
      openIf: (function() {
        if (!this.get('open-if')) {
          return;
        }
        this.open();
        return this.set('open-if', false);
      }).observes('open-if'),

      /**
       * Consumer can bind this property for a more fine grained control over when the modal is closed,
       * This is good for situations where closing the modal via the `toggler` is not enough.
       *
       * @property close-if
       * @public
       */
      'close-if': false,

      /**
       * observers the `close-if` property, if set to true, then close the modal.
       * @method closeIf
       * @private
       */
      closeIf: (function() {
        if (!this.get('close-if')) {
          return;
        }
        this.close();
        return this.set('close-if', false);
      }).observes('close-if')
    });
  });
define("ember-idx-modal", ["ember-idx-modal/index","exports"], function(__index__, __exports__) {
  "use strict";
  Object.keys(__index__).forEach(function(key){
    __exports__[key] = __index__[key];
  });
});
//# sourceMappingURL=ember-idx-modal.map