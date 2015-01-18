define("ember-cli-bootstrap/utils/test-breadcrumbs", 
  ["exports"],
  function(__exports__) {
    "use strict";
    Bootstrap.BsBreadcrumbsItem = Bootstrap.ItemView.extend({
      tagName: ['li'],
      classNameBindings: ["isActive:active"],
      template: Ember.Handlebars.compile('{{#unless view.isActive}}{{#if view.content.model}}{{#link-to view.content.route model.id}}{{view.content.name}}{{/link-to}}{{else}}{{#link-to view.content.route}}{{view.content.name}}{{/link-to}}{{/if}}{{else}}{{view.content.name}}{{/unless}}'),
      isActive: (function() {
        return this.get('content.active');
      }).property('content.active')
    });

    Bootstrap.BsBreadcrumbs = Bootstrap.ItemsView.extend(Bootstrap.WithRouter, {
      tagName: ['ol'],
      classNames: ['breadcrumb'],
      currentPathObserver: (function() {
        this.get('router');
        return this.send('updateCrumbsByRoute');
      }).observes('router.url').on('init'),
      content: [],
      itemViewClass: Bootstrap.BsBreadcrumbsItem,
      nameDictionary: void 0,
      dictionaryNamePrefix: 'breadcrumbs',
      actions: {
        currentPathDidChange: function() {
          return this.send('updateCrumbsByRoute');
        },
        updateCrumbsByRoute: function() {
          var routes,
          _this = this;
          this.get('content').clear();
          routes = this.get('container').lookup('router:main');
          routes.get('router.currentHandlerInfos').forEach(function(route, i, arr) {
            var crumb, displayName, name, routeName, _ref, _ref1, _ref2;
            name = route.name;
            if (name.indexOf('.index') !== -1 || name === 'application') {
              return;
            }
            if ((_ref = route.handler.breadcrumbs) != null ? _ref.hidden : void 0) {
              return;
            }
            routeName = route.handler.routeName;
            if ((_ref1 = route.handler.breadcrumbs) != null ? _ref1.name : void 0) {
              displayName = route.handler.breadcrumbs.name;
            } else if ((_ref2 = _this.get('nameDictionary')) != null ? _ref2["" + _this.dictionaryNamePrefix + "." + routeName] : void 0) {
              displayName = _this.get('nameDictionary')["" + _this.dictionaryNamePrefix + "." + routeName];
            } else {
              displayName = route.handler.routeName.split('.').pop();
              displayName = displayName[0].toUpperCase() + displayName.slice(1).toLowerCase();
            }
            crumb = Ember.Object.create({
              route: route.handler.routeName,
              name: displayName,
              model: null
            });
            if (_this.get('content').length === 0) {
              crumb.set('icon', 'fa fa-home home-icon');
            }
            if (route.isDynamic) {
              crumb.setProperties({
                model: route.handler.context,
                name: route.handler.context.get('name')
              });
            }
            return _this.get('content').pushObject(crumb);
          });
          return this.get('content.lastObject').set('active', true);
        }
      }
    });

    __exports__["default"] = Bootstrap.BsBreadcrumbs;
  });
define("ember-cli-bootstrap/utils/test-helper", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = function testHelper(value, options) {
      return new Ember.Handlebars.SafeString('you just used the test-helper with a value of: <b>' + value + '</b>');
    };
  });
define("ember-cli-bootstrap", ["ember-cli-bootstrap/index","exports"], function(__index__, __exports__) {
  "use strict";
  Object.keys(__index__).forEach(function(key){
    __exports__[key] = __index__[key];
  });
});

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

define("ember-idx-utils/config", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Em = __dependency1__["default"];

    __exports__["default"] = Em.Namespace.extend({
      _configs: Em.Object.create(),
      getConfig: function(name) {
        var config;
        config = this._configs.get(name);
        return config;
      },
      addConfig: function(name, config) {
        var defaultConfig, newConfig;
        defaultConfig = this._configs.get('default');
        newConfig = Em.Object.create(config);
        newConfig = Em.$.extend(true, newConfig, defaultConfig);
        return this._configs.set(name, newConfig);
      }
    });
  });
define("ember-idx-utils/mixin/hotkeys-bindings", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Em = __dependency1__["default"];

    /**
     * A mixin to enhance an `Ember.View` with hotkey support.
     * 
     * To use, inherit this mixin in your view:
     *
     * ```javascript
     * MyView = Em.View.extend(HotkeysMixin, {
     *   hotkeysBindings: ['ctrl-a']
     *
     *   actions: {
     *       'ctrl-a': function() {
     *           console.log("Ctrl-a was pressed!");
     *       }
     *   }
     * });
     * ```
     *
     * @class HotkeysMixin
     * @public
     */
    __exports__["default"] = Em.Mixin.create({
      /**
       * Add `hotkeysBindings` property as a `concatenatedProperties`.
       * @property concatenatedProperties
       * @type array
       */
      concatenatedProperties: ['hotkeysBindings'],
      keyMap: {
        8: "backspace",
        9: "tab",
        13: "return",
        16: "shift",
        17: "ctrl",
        18: "alt",
        224: "meta",
        112: "f1",
        113: "f2",
        114: "f3",
        115: "f4",
        116: "f5",
        117: "f6",
        118: "f7",
        119: "f8",
        120: "f9",
        121: "f10",
        122: "f11",
        123: "f12"
      },
      keyPressHandler: function(e) {
        var command;
        command = "";
        if (e.ctrlKey) {
          command += "ctrl+";
        }
        if (e.altKey) {
          command += "alt+";
        }
        if (e.shiftKey) {
          command += "shift+";
        }
        if (e.metaKey) {
          command += "meta+";
        }
        if (this.keyMap[e.which]) {
          command += this.keyMap[e.which];
        } else {
          command += String.fromCharCode(e.which).toLowerCase();
        }
        Em.debug("hotkey command: " + command);
        return this.send(command);
      },
      keyDown: function(e) {
        return this.keyPressHandler(e);
      },
      keyUp: function(e) {
        return this.keyPressHandler(e);
      },
      keyPress: function(e) {
        return this.keyPressHandler(e);
      }
    });
  });
define("ember-idx-utils/mixin/style-bindings", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Em = __dependency1__["default"];

    /**
     * Provides styleBindings property to bind style 
     * properties based on object properties.
     *
     * @class StyleBindingsMixin
     * @public
     */
    __exports__["default"] = Em.Mixin.create({

      /**
       * Add `styleBindings` property as a `concatenatedProperties`.
       * @property concatenatedProperties
       * @type array
       */
      concatenatedProperties: ['styleBindings'],

      /**
       * Apply the `style` attribute to the DOM element.
       * @property attributeBindings
       * @type array
       */
      attributeBindings: ['style'],

      /**
       * The default unit for numbered value.
       * @property unit
       * @type string
       */
      unit: 'px',

      /**
       * Build a style property and its value as a string.
       * @method buildStyleString
       * @param {String} style property name
       * @param {String} property name in the current object that should be resolved as the
       * value of the style property.
       * @private
       */
      buildStyleString: function(styleName, property) {
        var value;
        value = this.get(property);
        if (value === void 0) {
          return;
        }
        if (Em.typeOf(value) === "number") {
          value = value + this.get("unit");
        }
        return styleName + ":" + value + ";";
      },

      /**
       * Apply the style bindings during the view `init` phase.
       *
       * This method assumes that the attribute `styleBindings` is defined as an array of strings where
       * each string is a property name that should be resolved as a style option.
       *
       * @method applyBindings
       * @private
       */
      applyBindings: (function() {
        var lookup, properties, styleBindingsstyleBindings, styleComputed, styles;
        if (!(styleBindingsstyleBindings = this.styleBindings)) {
          return;
        }
        lookup = {};
        this.styleBindings.forEach(function(binding) {
          var propArr, property, style;
          propArr = binding.split(":");
          property = propArr[0];
          style = propArr[1];
          return lookup[style || property] = property;
        });
        styles = Em.keys(lookup);
        properties = styles.map(function(style) {
          return lookup[style];
        });
        styleComputed = Em.computed(function() {
          var styleString, styleTokens;
          styleTokens = styles.map((function(_this) {
            return function(style) {
              return _this.buildStyleString(style, lookup[style]);
            };
          })(this));
          styleString = styleTokens.join("");
          if (styleString.length !== 0) {
            return styleString;
          }
        });
        styleComputed.property.apply(styleComputed, properties);
        return Em.defineProperty(this, "style", styleComputed);
      }).on('init')
    });
  });
define("ember-idx-utils/mixin/with-config", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Em = __dependency1__["default"];

    __exports__["default"] = Em.Mixin.create({
      configName: (function() {
        var config;
        config = this.nearestWithProperty('configName');
        if (config) {
          return config.get('configName');
        } else {
          return 'default';
        }
      }).property(),
      config: (function() {
        return Em.Config.getConfig(this.get('configName'));
      }).property('configName')
    });
  });
define("ember-idx-utils/utils/delay", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Em = __dependency1__["default"];

    var delay = function(ms) {
      ms = ms || 1500;
      return new Em.RSVP.Promise(function(resolve) {
        Em.run.later(this, resolve, ms);
      });
    };

    __exports__["default"] = delay;
  });
define("ember-idx-utils", ["ember-idx-utils/index","exports"], function(__index__, __exports__) {
  "use strict";
  Object.keys(__index__).forEach(function(key){
    __exports__[key] = __index__[key];
  });
});
//# sourceMappingURL=addons.map