define("sonatribe-ui/adapters/application", 
  ["ember-data","ember","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];
    var Ember = __dependency2__["default"];

    __exports__["default"] = DS.RESTAdapter.extend({
      host: Sonatribe.SiteSettings.apiUrl,
      updateRecord: function (store, type, record) {
        var data = {};
        var get = Ember.get;
        var serializer = store.serializerFor(type.typeKey);

        serializer.serializeIntoHash(data, type, record, { includeId: true });

        var id = get(record, "id");

        return this.ajax(this.buildURL(type.typeKey, id, record), "PUT", { data: data });
      } });
  });
define("sonatribe-ui/app", 
  ["ember","ember/resolver","ember/load-initializers","sonatribe-ui/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Resolver = __dependency2__["default"];
    var loadInitializers = __dependency3__["default"];
    var config = __dependency4__["default"];

    Ember.MODEL_FACTORY_INJECTIONS = true;

    var App = Ember.Application.extend({
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix,
      Resolver: Resolver
    });

    loadInitializers(App, config.modulePrefix);


    window.Sonatribe = {};
    Sonatribe.SiteSettings = {
      apiUrl: "https://sonatribe-api.herokuapp.com",
      appUrl: "http://dev.festivaltribe.co.uk:4200",

      title: "Sonatribe",
      logo_url: "http://alpha.sonatribe.com/img/logo_simple_small.jpg",
      logo_small_url: "http://alpha.sonatribe.com/img/logo_simple_small.jpg",
      mobile_logo_url: "" };

    __exports__["default"] = App;
  });
define("sonatribe-ui/authenticators/torii", 
  ["simple-auth/authenticators/base","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Base = __dependency1__["default"];

    /**
    Authenticator that wraps the
    [Torii library](https://github.com/Vestorly/torii).

    _The factory for this authenticator is registered as
    `'simple-auth-authenticator:torii'` in Ember's container._

    @class Torii
    @namespace SimpleAuth.Authenticators
    @module simple-auth-torii/authenticators/torii
    @extends Base
    */
    __exports__["default"] = Base.extend({
      /**
      @property torii
      @private
      */
      torii: null,

      /**
      @property provider
      @private
      */
      provider: null,

      /**
      Restores the session by calling the torii provider's `fetch` method.
       @method restore
      @param {Object} data The data to restore the session from
      @return {Ember.RSVP.Promise} A promise that when it resolves results in the session being authenticated
      */
      restore: function (data) {
        var _this = this;
        data = data || {};
        return new Ember.RSVP.Promise(function (resolve, reject) {
          if (!Ember.isEmpty(data.provider)) {
            var provider = data.provider;
            _this.torii.fetch(data.provider, data).then(function (data) {
              _this.resolveWith(provider, data, resolve);
            }, function () {
              delete _this.provider;
              reject();
            });
          } else {
            delete _this.provider;
            reject();
          }
        });
      },

      /**
      Authenticates the session by opening the torii provider. For more
      documentation on torii, see the
      [project's README](https://github.com/Vestorly/torii#readme).
       @method authenticate
      @param {String} provider The provider to authenticate the session with
      @param {Object} options The options to pass to the torii provider
      @return {Ember.RSVP.Promise} A promise that resolves when the provider successfully authenticates a user and rejects otherwise
      */
      authenticate: function (provider, options) {
        var _this = this;
        return new Ember.RSVP.Promise(function (resolve, reject) {
          _this.torii.open(provider, options || {}).then(function (data) {
            _this.resolveWith(provider, data, resolve);
          }, reject);
        });
      },

      /**
      Closes the torii provider.
       @method invalidate
      @param {Object} data The data that's stored in the session
      @return {Ember.RSVP.Promise} A promise that resolves when the provider successfully closes and rejects otherwise
      */
      invalidate: function () {
        var _this = this;
        return new Ember.RSVP.Promise(function (resolve, reject) {
          _this.torii.close(_this.provider).then(function () {
            delete _this.provider;
            resolve();
          }, reject);
        });
      },

      /**
      @method resolveWith
      @private
      */
      resolveWith: function (provider, data, resolve) {
        data.provider = provider;
        this.provider = data.provider;
        resolve(data);
      }

    });
  });
define("sonatribe-ui/components/em-checkbox", 
  ["ember","ember-idx-forms/checkbox","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var CheckboxComponent = __dependency2__["default"];

    __exports__["default"] = CheckboxComponent;
  });
define("sonatribe-ui/components/em-form-control-help", 
  ["ember","ember-idx-forms/control_help","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var FormControlHelperComponent = __dependency2__["default"];

    __exports__["default"] = FormControlHelperComponent;
  });
define("sonatribe-ui/components/em-form-group", 
  ["ember","ember-idx-forms/group","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var FormGroupComponent = __dependency2__["default"];

    __exports__["default"] = FormGroupComponent;
  });
define("sonatribe-ui/components/em-form-label", 
  ["ember","ember-idx-forms/label","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var FormLabelComponent = __dependency2__["default"];

    __exports__["default"] = FormLabelComponent;
  });
define("sonatribe-ui/components/em-form-submit", 
  ["ember","ember-idx-forms/submit_button","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var SubmitButtonComponent = __dependency2__["default"];

    __exports__["default"] = SubmitButtonComponent;
  });
define("sonatribe-ui/components/em-form", 
  ["ember","ember-idx-forms/form","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var FormComponent = __dependency2__["default"];

    __exports__["default"] = FormComponent;
  });
define("sonatribe-ui/components/em-input", 
  ["ember","ember-idx-forms/input","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var InputComponent = __dependency2__["default"];

    __exports__["default"] = InputComponent;
  });
define("sonatribe-ui/components/em-modal-body", 
  ["ember-idx-modal/modal-body","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var BodyComponent = __dependency1__["default"];

    __exports__["default"] = BodyComponent;
  });
define("sonatribe-ui/components/em-modal-confirm-with-reason", 
  ["ember-idx-modal/modal-confirm-with-reason","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var ConfirmWithReasonModal = __dependency1__["default"];

    __exports__["default"] = ConfirmWithReasonModal;
  });
define("sonatribe-ui/components/em-modal-confirm", 
  ["ember-idx-modal/modal-confirm","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var ModalConfirm = __dependency1__["default"];

    __exports__["default"] = ModalConfirm;
  });
define("sonatribe-ui/components/em-modal-emform", 
  ["ember-idx-modal/modal-emform","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var ModalEmFormComponent = __dependency1__["default"];

    __exports__["default"] = ModalEmFormComponent;
  });
define("sonatribe-ui/components/em-modal-footer", 
  ["ember-idx-modal/modal-footer","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var FooterComponent = __dependency1__["default"];

    __exports__["default"] = FooterComponent;
  });
define("sonatribe-ui/components/em-modal-form", 
  ["ember-idx-modal/modal-form","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var ModalFormComponent = __dependency1__["default"];

    __exports__["default"] = ModalFormComponent;
  });
define("sonatribe-ui/components/em-modal-title", 
  ["ember-idx-modal/modal-title","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var TitleComponent = __dependency1__["default"];

    __exports__["default"] = TitleComponent;
  });
define("sonatribe-ui/components/em-modal-toggler", 
  ["ember-idx-modal/modal-toggler","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var TogglerComponent = __dependency1__["default"];

    __exports__["default"] = TogglerComponent;
  });
define("sonatribe-ui/components/em-modal", 
  ["ember-idx-modal/modal","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var ModalComponent = __dependency1__["default"];

    __exports__["default"] = ModalComponent;
  });
define("sonatribe-ui/components/em-select", 
  ["ember","ember-idx-forms/select","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var SelectComponent = __dependency2__["default"];

    __exports__["default"] = SelectComponent;
  });
define("sonatribe-ui/components/em-text", 
  ["ember","ember-idx-forms/text","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var TextComponent = __dependency2__["default"];

    __exports__["default"] = TextComponent;
  });
define("sonatribe-ui/components/home-logo", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Component.extend({
      classNames: ["title"],
      bigLogoUrl: Sonatribe.SiteSettings.logo_url,
      title: Sonatribe.SiteSettings.title,
      linkUrl: (function () {
        return "";
      }).property(),

      showSmallLogo: (function () {
        return false;
      }).property("minimized"),

      showMobileLogo: (function () {
        return false;
      }).property() });
  });
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
define("sonatribe-ui/controllers/admin", 
  ["ember","sonatribe-ui/mixins/has-current-user","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var HasCurrentUser = __dependency2__["default"];

    __exports__["default"] = Ember.Controller.extend(HasCurrentUser, {
      actions: {
        createNew: function () {
          var ei = this.store.createRecord("eventInstance", {
            name: "test"
          });
          ei.save();
        }
      }
    });
  });
define("sonatribe-ui/controllers/application", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];


    __exports__["default"] = Ember.Controller.extend({
      needs: ["modal"],
      eventName: null,
      init: function () {
        this.set("searchContextEnabled", false);
      },
      actions: {
        searchEvent: function () {} }
    });
    //alert(this.get('eventName'));
    //this.transitionTo('posts', );
  });
define("sonatribe-ui/controllers/create-account", 
  ["ember","sonatribe-ui/mixins/modal-functionality","sonatribe-ui/mixins/presence","sonatribe-ui/controllers/sonatribe","sonatribe-ui/mixins/has-current-user","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var ModalFunctionality = __dependency2__["default"];
    var Presence = __dependency3__["default"];

    var SonatribeController = __dependency4__["default"];
    var HasCurrentUser = __dependency5__["default"];


    __exports__["default"] = SonatribeController.extend(ModalFunctionality, Presence, HasCurrentUser, {
      needs: ["modal/login", "createAccount"],
      uniqueUsernameValidation: null,
      globalNicknameExists: false,
      complete: false,
      accountPasswordConfirm: 0,
      accountChallenge: 0,
      passwordRequired: true,
      formSubmitted: false,
      rejectedEmails: Ember.A([]),
      rejectedPasswords: Ember.A([]),
      prefilledUsername: null,
      userFields: null,
      actions: {
        createAccount: function () {
          var name = this.get("accountName");
          var username = this.get("accountUsername");
          var email = this.get("accountEmail");
          //var password = this.get('accountPassword');

          var self = this;

          if (this.blank("accountName") || this.blank("accountEmail") || this.get("passwordRequired") && this.blank("accountPassword")) {
            self.flash("Name, username or password is blank", "error");
            return;
          }

          var currentUser = this.get("currentUser");
          var user = this.store.find("user", currentUser.get("id"));

          user.set("username", username);
          user.set("email", email);
          user.set("name", name);

          user.save();

          return false;
        }
      }
    });
  });
define("sonatribe-ui/controllers/event-profile", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Controller.extend({});
  });
define("sonatribe-ui/controllers/event-profile/lineup-viewer", 
  ["ember","sonatribe-ui/mixins/search-lineup","sonatribe-ui/mixins/sonatribe-debounce","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var SearchLineup = __dependency2__["default"];
    var Debounce = __dependency3__["default"];

    __exports__["default"] = Ember.ArrayController.extend(SearchLineup, Debounce, {
      needs: "eventProfile",
      renderList: false,
      renderGrid: true,
      newSearchNeeded: (function () {
        this.set("noResults", false);
        var term = (this.get("term") || "").trim();
        if (term.length >= 0) {
          this.set("loading", true);
          this.search(term, this.get("typeFilter"));
        } else {
          this.setProperties({ content: null });
        }
        this.set("selectedIndex", 0);
      }).observes("term"),

      search: function (term) {
        var self = this;
        var slug = this.get("controllers.eventProfile").model.eventProfile.slug;

        return this.debounce(this.searchLineup(slug, term).then(function (results) {
          self.setProperties({ noResults: !results, model: results.content });
          self.set("loading", false);
        })["catch"](function () {
          self.set("loading", false);
        }), 400);
      },

      actions: {
        nextPage: function () {
          this.set("renderGrid", !this.get("renderGrid"));
          this.set("renderList", !this.get("renderList"));
        } }
    });
  });
define("sonatribe-ui/controllers/header", 
  ["ember","sonatribe-ui/mixins/has-current-user","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var HasCurrentUser = __dependency2__["default"];

    __exports__["default"] = Ember.Controller.extend(HasCurrentUser, {
      needs: ["application"] });
  });
define("sonatribe-ui/controllers/index", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Controller.extend({
      actions: {
        searchEvent: function () {
          alert("clicked!");
        }
      }
    });
  });
define("sonatribe-ui/controllers/lineup-viewer", 
  ["ember","sonatribe-ui/mixins/search-lineup","sonatribe-ui/mixins/sonatribe-debounce","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var SearchLineup = __dependency2__["default"];
    var Debounce = __dependency3__["default"];

    __exports__["default"] = Ember.ArrayController.extend(SearchLineup, Debounce, {
      needs: "eventProfile",
      renderList: false,
      renderGrid: true,
      newSearchNeeded: (function () {
        this.set("noResults", false);
        var term = (this.get("term") || "").trim();
        if (term.length >= 0) {
          this.set("loading", true);
          this.search(term, this.get("typeFilter"));
        } else {
          this.setProperties({ content: null });
        }
        this.set("selectedIndex", 0);
      }).observes("term"),

      search: function (term) {
        var self = this;
        var slug = this.get("controllers.eventProfile").model.eventProfile.slug;

        return this.debounce(this.searchLineup(slug, term).then(function (results) {
          self.setProperties({ noResults: !results, model: results.content });
          self.set("loading", false);
        })["catch"](function () {
          self.set("loading", false);
        }), 400);
      },

      actions: {
        nextPage: function () {
          this.set("renderGrid", !this.get("renderGrid"));
          this.set("renderList", !this.get("renderList"));
        } }
    });
  });
define("sonatribe-ui/controllers/listing-event", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Controller.extend({});
  });
define("sonatribe-ui/controllers/manage-account", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Controller.extend({});
  });
define("sonatribe-ui/controllers/modal", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Controller.extend({
      initialiseValues: function (params) {
        alert(params);
      }
    });
  });
define("sonatribe-ui/controllers/modal/create-account", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Controller.extend({});
  });
define("sonatribe-ui/controllers/modal/login", 
  ["ember","sonatribe-ui/mixins/presence","sonatribe-ui/mixins/sonatribe-ajax","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Presence = __dependency2__["default"];
    var Ajax = __dependency3__["default"];

    __exports__["default"] = Ember.Controller.extend(Presence, Ajax, {
      flashMessageChanged: (function () {
        var flashMessage = this.get("flashMessage");
        if (flashMessage) {
          var messageClass = flashMessage.get("messageClass") || "success";
          var $alert = Ember.$("#modal-alert").hide().removeClass("alert-error", "alert-success");
          $alert.addClass("alert alert-" + messageClass).html(flashMessage.get("message"));
          $alert.fadeIn();
        }
      }).observes("flashMessage"),
      showRegistration: false,
      actions: {
        login: function () {
          var self = this;
          if (this.blank("loginName") || this.blank("loginPassword")) {
            self.flash("Username or password is blank", "error");
            return;
          }

          var promise = this.ajax("/auth/credentials?username=" + this.get("loginName") + "&password=" + this.get("loginPassword"), {});

          promise.then(function () {
            self.set("loggedIn", true);
            // Trigger the browser's password manager using the hidden static login form:
            location.reload();
          }, function () {
            // Failed to login
            self.flash("Login error", "error");
            self.set("loggingIn", false);
          });

          return false;
        }
      }
    });
  });
define("sonatribe-ui/controllers/search", 
  ["sonatribe-ui/mixins/search","sonatribe-ui/mixins/sonatribe-debounce","sonatribe-ui/controllers/sonatribe","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var EventSearch = __dependency1__["default"];
    var Debounce = __dependency2__["default"];
    var SonatribeController = __dependency3__["default"];


    __exports__["default"] = SonatribeController.extend(EventSearch, Debounce, {
      contextChanged: (function () {
        if (this.get("searchContextEnabled")) {
          this._dontSearch = true;
          this.set("searchContextEnabled", false);
          this._dontSearch = false;
        }
      }).observes("searchContext"),

      searchContextEnabledChanged: (function () {
        if (this._dontSearch) {
          return;
        }
        this.newSearchNeeded();
      }).observes("searchContextEnabled"),

      // If we need to perform another search
      newSearchNeeded: (function () {
        this.set("noResults", false);
        var term = (this.get("term") || "").trim();
        if (term.length >= 0) {
          this.set("loading", true);
          this.searchTerm(term, this.get("typeFilter"));
        } else {
          this.setProperties({ content: null });
        }
        this.set("selectedIndex", 0);
      }).observes("term", "typeFilter"),

      searchTerm: function (term) {
        //return this.debouncePromise(function(term, typeFilter) {
        var self = this;

        var context;
        if (this.get("searchContextEnabled")) {
          context = this.get("searchContext");
        }

        if (term.length > 2) {
          return this.debounce(this.search(term).then(function (results) {
            self.setProperties({ noResults: !results, content: results });
            self.set("loading", false);
          })["catch"](function () {
            self.set("loading", false);
          }), 400);
        }
      } });
  });
define("sonatribe-ui/controllers/sonatribe", 
  ["ember","sonatribe-ui/mixins/has-current-user","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var HasCurrentUser = __dependency2__["default"];


    __exports__["default"] = Ember.Controller.extend(HasCurrentUser, {
      apiUrl: Sonatribe.SiteSettings.apiUrl,
      appUrl: Sonatribe.SiteSettings.appUrl,
      isAdmin: (function () {
        var found = false;

        if (this.get("currentUser.Roles") && this.get("currentUser.Roles").indexOf("Admin") > -1) {
          found = true;
        }

        return found;
      }).property(),
      logoutUrl: Sonatribe.SiteSettings.apiUrl + "auth/logout/?continue=" + Sonatribe.SiteSettings.appUrl,
      facebookLoginUrl: Sonatribe.SiteSettings.apiUrl + "auth/facebook/?continue=" + Sonatribe.SiteSettings.appUrl,
      twitterLoginUrl: Sonatribe.SiteSettings.apiUrl + "auth/twitter/?continue=" + Sonatribe.SiteSettings.appUrl,
      imageFormatUrl: Sonatribe.SiteSettings.apiUrl + "image/"
    });
  });
define("sonatribe-ui/controllers/user-dropdown", 
  ["sonatribe-ui/mixins/has-current-user","sonatribe-ui/controllers/sonatribe","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var HasCurrentUser = __dependency1__["default"];
    var SonatribeController = __dependency2__["default"];
    __exports__["default"] = SonatribeController.extend(HasCurrentUser, {});
  });
define("sonatribe-ui/helpers/bound-avatar", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var safe = Handlebars.SafeString;

    var Ember = __dependency1__["default"];

    function boundAvatar(user) {
      if (user != null && user.image != null) {
        return new safe("<img src=\"" + Sonatribe.SiteSettings.apiUrl + "image/" + user.image.name + "?size=avatarsquare\" />");
      } else if (user.image != null) {
        return new safe("<img src=\"" + Sonatribe.SiteSettings.apiUrl + "image/" + user.image.name + "?size=avatarsquare\" />");
      } else {
        return new safe("<img src=\"http://conversations.sonatribe.com/user_avatar/conversations.sonatribe.com/thestumonkey/25/13.png\" />");
      }
    }

    __exports__.boundAvatar = boundAvatar;

    __exports__["default"] = Ember.Handlebars.makeBoundHelper(boundAvatar);
  });
define("sonatribe-ui/helpers/computed", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    function computed() {
      return Ember.computed(function () {
        return Sonatribe.SiteSettings[name];
      }).property();
    }

    __exports__.computed = computed;

    __exports__["default"] = Ember.Handlebars.makeBoundHelper(computed);
  });
define("sonatribe-ui/helpers/fa-icon", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    var FA_PREFIX = /^fa\-.+/;

    var warn = Ember.Logger.warn;

    /**
     * Handlebars helper for generating HTML that renders a FontAwesome icon.
     *
     * @param  {String} name    The icon name. Note that the `fa-` prefix is optional.
     *                          For example, you can pass in either `fa-camera` or just `camera`.
     * @param  {Object} options Options passed to helper.
     * @return {Ember.Handlebars.SafeString} The HTML markup.
     */
    var faIcon = function (name, options) {
      if (Ember.typeOf(name) !== "string") {
        var message = "fa-icon: no icon specified";
        warn(message);
        return Ember.String.htmlSafe(message);
      }

      var params = options.hash,
          classNames = [],
          html = "";

      classNames.push("fa");
      if (!name.match(FA_PREFIX)) {
        name = "fa-" + name;
      }
      classNames.push(name);
      if (params.spin) {
        classNames.push("fa-spin");
      }
      if (params.flip) {
        classNames.push("fa-flip-" + params.flip);
      }
      if (params.rotate) {
        classNames.push("fa-rotate-" + params.rotate);
      }
      if (params.lg) {
        warn("fa-icon: the 'lg' parameter is deprecated. Use 'size' instead. I.e. {{fa-icon size=\"lg\"}}");
        classNames.push("fa-lg");
      }
      if (params.x) {
        warn("fa-icon: the 'x' parameter is deprecated. Use 'size' instead. I.e. {{fa-icon size=\"" + params.x + "\"}}");
        classNames.push("fa-" + params.x + "x");
      }
      if (params.size) {
        if (Ember.typeOf(params.size) === "string" && params.size.match(/\d+/)) {
          params.size = Number(params.size);
        }
        if (Ember.typeOf(params.size) === "number") {
          classNames.push("fa-" + params.size + "x");
        } else {
          classNames.push("fa-" + params.size);
        }
      }
      if (params.fixedWidth) {
        classNames.push("fa-fw");
      }
      if (params.listItem) {
        classNames.push("fa-li");
      }
      if (params.pull) {
        classNames.push("pull-" + params.pull);
      }
      if (params.border) {
        classNames.push("fa-border");
      }
      if (params.classNames && !Ember.isArray(params.classNames)) {
        params.classNames = [params.classNames];
      }
      if (!Ember.isEmpty(params.classNames)) {
        Array.prototype.push.apply(classNames, params.classNames);
      }


      html += "<";
      var tagName = params.tagName || "i";
      html += tagName;
      html += " class='" + classNames.join(" ") + "'";
      if (params.title) {
        html += " title='" + params.title + "'";
      }
      if (params.ariaHidden === undefined || params.ariaHidden) {
        html += " aria-hidden=\"true\"";
      }
      html += "></" + tagName + ">";
      return Ember.String.htmlSafe(html);
    };

    __exports__.faIcon = faIcon;

    __exports__["default"] = Ember.Handlebars.makeBoundHelper(faIcon);
  });
define("sonatribe-ui/helpers/fmt", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = function () {
      /**
        Uses an Ember String `fmt` call to format a string. See:
        http://emberjs.com/api/classes/Em.String.html#method_fmt
         @method fmt
        @params {String} properties* to format
        @params {String} format the format string
        @return {Function} computedProperty function
      **/
      var args = Array.prototype.slice.call(arguments, 0);
      var format = args.pop();
      var computed = Ember.computed(function () {
        var self = this;
        return format.fmt.apply(format, args.map(function (a) {
          return self.get(a);
        }));
      });
      return computed.property.apply(computed, args);
    };
  });
define("sonatribe-ui/helpers/icon-helper", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    function iconHelper(i) {
      var labelKey;
      var html = "<i class=\"fa fa-" + i + "\"";
      if (labelKey) {
        html += " aria-hidden=\"true\"";
      }
      html += "></i>";
      if (labelKey) {
        html += "<span class=\"sr-only\">" + labelKey + "</span>";
      }
      return new Handlebars.SafeString(html);
    }

    __exports__.iconHelper = iconHelper;

    __exports__["default"] = Ember.Handlebars.makeBoundHelper(iconHelper);
  });
define("sonatribe-ui/helpers/image-helper", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    function imageHelper(model, size) {
      var html = "<img src=\"" + Sonatribe.ApiUrl + "/image/" + model.get("name") + "?size=" + size + "\"  />";
      return new Handlebars.SafeString(html);
    }

    __exports__.imageHelper = imageHelper;
    __exports__["default"] = Ember.Handlebars.makeBoundHelper(imageHelper);
  });
define("sonatribe-ui/helpers/test-breadcrumbs", 
  ["ember","ember-cli-bootstrap/utils/test-breadcrumbs","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var BsBreadcrumbs = __dependency2__["default"];

    debugger;
    __exports__["default"] = Ember.Handlebars.makeBoundHelper(BsBreadcrumbs);
  });
define("sonatribe-ui/helpers/test-helper", 
  ["ember","ember-cli-bootstrap/utils/test-helper","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var testHelper = __dependency2__["default"];

    __exports__["default"] = Ember.Handlebars.makeBoundHelper(testHelper);
  });
define("sonatribe-ui/initializers/config", 
  ["ember","ember-idx-utils/config","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Em = __dependency1__["default"];
    var Config = __dependency2__["default"];

    __exports__["default"] = {
      name: "ember-idx-modal",
      initialize: function () {
        if (!Em.Config) {
          Em.Config = Config = Config.create();
        }

        var defaultConfig = Config.getConfig("bs");
        if (!defaultConfig) {
          Config.addConfig("bs");
          defaultConfig = Config.getConfig("bs");
        }

        defaultConfig.modal = {
          classes: ["em-modal", "modal", "fade"],
          bodyClasses: ["modal-body"],
          titleClasses: ["modal-header"],
          footerClasses: ["modal-footer"]
        };
      }
    };
  });
define("sonatribe-ui/initializers/export-application-global", 
  ["ember","sonatribe-ui/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    function initialize(container, application) {
      var classifiedName = Ember.String.classify(config.modulePrefix);

      if (config.exportApplicationGlobal) {
        window[classifiedName] = application;
      }
    };
    __exports__.initialize = initialize;

    __exports__["default"] = {
      name: "export-application-global",

      initialize: initialize
    };
  });
define("sonatribe-ui/initializers/initialize-container", 
  ["exports"],
  function(__exports__) {
    "use strict";

    var initialize = function () {};
    __exports__.initialize = initialize;
    __exports__["default"] = {
      name: "initialize-container",

      initialize: initialize
    };
    /*container, app*/
    // app.register('ajax:main', Ajax);
    //container.injection('application:main', 'store', 'store:main');
    //SimpleAuth(container, app);
  });
define("sonatribe-ui/initializers/initialize-torii-callback", 
  ["torii/redirect-handler","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var RedirectHandler = __dependency1__["default"];

    __exports__["default"] = {
      name: "torii-callback",
      before: "torii",
      initialize: function (container, app) {
        app.deferReadiness();
        RedirectHandler.handle(window.location.toString())["catch"](function () {
          app.advanceReadiness();
        });
      }
    };
  });
define("sonatribe-ui/initializers/initialize-torii-session", 
  ["torii/configuration","torii/bootstrap/session","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var configuration = __dependency1__["default"];
    var bootstrapSession = __dependency2__["default"];

    __exports__["default"] = {
      name: "torii-session",
      after: "torii",

      initialize: function (container) {
        if (configuration.sessionServiceName) {
          bootstrapSession(container, configuration.sessionServiceName);
          container.injection("adapter", configuration.sessionServiceName, "torii:session");
        }
      }
    };
  });
define("sonatribe-ui/initializers/initialize-torii", 
  ["torii/bootstrap/torii","torii/configuration","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var bootstrapTorii = __dependency1__["default"];
    var configuration = __dependency2__["default"];

    var initializer = {
      name: "torii",
      initialize: function (container, app) {
        bootstrapTorii(container);

        // Walk all configured providers and eagerly instantiate
        // them. This gives providers with initialization side effects
        // like facebook-connect a chance to load up assets.
        for (var key in configuration.providers) {
          if (configuration.providers.hasOwnProperty(key)) {
            container.lookup("torii-provider:" + key);
          }
        }

        app.inject("route", "torii", "torii:main");
      }
    };

    if (window.DS) {
      initializer.after = "store";
    }

    __exports__["default"] = initializer;
  });
define("sonatribe-ui/initializers/initialize-user", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var initialize = function () {};
    __exports__.initialize = initialize;
    __exports__["default"] = {
      name: "initialize-user",

      initialize: initialize
    };
    /*container, app*/
    /*app.deferReadiness();
     Sonatribe.Ajax.ajax('model/user/')
         .then(function(result){
    		    var store = container.lookup('store:main');
             var user = store.createRecord('user', result.result);
             app.advanceReadiness();
     	});*/
  });
define("sonatribe-ui/initializers/router-reopen", 
  ["sonatribe-ui/routes/sonatribe","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var SonatribeRoute = __dependency1__["default"];

    var initialize = function () {
      SonatribeRoute.reopenClass({
        showModal: function (router, name, model) {
          router.controllerFor("modal").set("modalClass", null);

          router.render(name, { into: "modal", outlet: "modalBody" });

          var controller = router.controllerFor(name);
          if (controller) {
            if (model) {
              controller.set("model", model);
            }
            if (controller && controller.onShow) {
              controller.onShow();
            }
            controller.set("flashMessage", null);
          }
        }
      });
    };
    __exports__.initialize = initialize;
    __exports__["default"] = {
      name: "router-reopen",

      initialize: initialize
    };
    /*container, app*/
  });
define("sonatribe-ui/initializers/simple-auth-oauth2", 
  ["simple-auth-oauth2/configuration","simple-auth-oauth2/authenticators/oauth2","simple-auth-oauth2/authorizers/oauth2","sonatribe-ui/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Configuration = __dependency1__["default"];
    var Authenticator = __dependency2__["default"];
    var Authorizer = __dependency3__["default"];
    var ENV = __dependency4__["default"];

    __exports__["default"] = {
      name: "simple-auth-oauth2",
      before: "simple-auth",
      initialize: function (container, application) {
        Configuration.load(container, ENV["simple-auth-oauth2"] || {});
        container.register("simple-auth-authorizer:oauth2-bearer", Authorizer);
        container.register("simple-auth-authenticator:oauth2-password-grant", Authenticator);
      }
    };
  });
define("sonatribe-ui/initializers/simple-auth-torii", 
  ["simple-auth-torii/initializer","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var initializer = __dependency1__["default"];

    __exports__["default"] = initializer;
  });
define("sonatribe-ui/initializers/simple-auth", 
  ["simple-auth/configuration","simple-auth/setup","sonatribe-ui/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var Configuration = __dependency1__["default"];
    var setup = __dependency2__["default"];
    var ENV = __dependency3__["default"];

    __exports__["default"] = {
      name: "simple-auth",
      initialize: function (container, application) {
        Configuration.load(container, ENV["simple-auth"] || {});
        setup(container, application);
      }
    };
  });
define("sonatribe-ui/initializers/test-breadcrumbs", 
  ["sonatribe-ui/helpers/test-breadcrumbs","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var testHelper = __dependency1__["default"];

    function initialize() {
      debugger;
      Ember.Handlebars.registerHelper("test-breadcrumbs", testHelper);
    };
    __exports__.initialize = initialize;

    __exports__["default"] = {
      name: "test-breadcrumbs",
      initialize: initialize
    };
    /* container, application */
  });
define("sonatribe-ui/initializers/test-helper", 
  ["sonatribe-ui/helpers/test-helper","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var testHelper = __dependency1__["default"];

    function initialize() {
      Ember.Handlebars.registerHelper("test-helper", testHelper);
    };
    __exports__.initialize = initialize;

    __exports__["default"] = {
      name: "test-helper",
      initialize: initialize
    };
    /* container, application */
  });
define("sonatribe-ui/initializers/torii", 
  ["sonatribe-ui/authenticators/torii","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Authenticator = __dependency1__["default"];

    __exports__["default"] = {
      name: "sonatribe-auth-torii",
      before: "simple-auth",
      after: "torii",
      initialize: function (container) {
        var torii = container.lookup("torii:main");
        var authenticator = Authenticator.create({ torii: torii });
        container.register("sonatribe-auth-authenticator:torii", authenticator, { instantiate: false });
      }
    };
  });
define("sonatribe-ui/initializers/user-reopen-class", 
  ["sonatribe-ui/models/user","sonatribe-ui/mixins/singleton","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var User = __dependency1__["default"];
    var Singleton = __dependency2__["default"];

    var initialize = function (container) {
      User.reopenClass(Singleton, {
        createCurrent: function () {
          var userJson = null; //PreloadStore.get('currentUser');
          if (userJson) {
            var store = container.lookup("store:main");
            return store.push("user", userJson);
          }
          return null;
        } });
    };
    __exports__.initialize = initialize;
    __exports__["default"] = {
      name: "user-reopen-class",

      initialize: initialize
    };
  });
define("sonatribe-ui/initializers/view-reopen", 
  ["sonatribe-ui/views/view","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var View = __dependency1__["default"];

    var initialize = function () {
      View.reopenClass({});
    };
    __exports__.initialize = initialize;
    __exports__["default"] = {
      name: "view-reopen",

      initialize: initialize
    };
    /* container, app */
  });
define("sonatribe-ui/mixins/has-current-user", 
  ["ember","sonatribe-ui/models/user","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var User = __dependency2__["default"];

    __exports__["default"] = Ember.Mixin.create({
      currentUser: (function () {
        var user = User.current();
        return user;
      }).property().volatile()
    });
  });
define("sonatribe-ui/mixins/modal-functionality", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Mixin.create({
      needs: ["modal"],

      flash: function (message, messageClass) {
        this.set("flashMessage", Ember.Object.create({
          message: message,
          messageClass: messageClass
        }));
      }
    });
  });
define("sonatribe-ui/mixins/presence", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Mixin.create({
      blank: function (name) {
        return Ember.isEmpty(this[name] || this.get(name));
      },

      present: function (name) {
        return !this.blank(name);
      }
    });
  });
define("sonatribe-ui/mixins/search-lineup", 
  ["ember","sonatribe-ui/mixins/sonatribe-ajax","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Ajax = __dependency2__["default"];

    __exports__["default"] = Ember.Mixin.create(Ajax, {
      searchLineup: function (slug, term) {
        return this.store.find("listingEvent", { name: term, eventInstanceSlug: slug, Skip: 0, Take: 20 });
      }
    });
  });
define("sonatribe-ui/mixins/search", 
  ["ember","sonatribe-ui/mixins/sonatribe-ajax","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Ajax = __dependency2__["default"];

    __exports__["default"] = Ember.Mixin.create(Ajax, {
      search: function (term) {
        var promise = this.ajax("search/" + term, { term: term });

        promise.then(function (result) {
          result.resultTypes = [];

          [["event", "events"], ["user", "users"], ["artist", "artists"]].forEach(function (pair) {
            var type = pair[0],
                name = pair[1];
            if (result[name].length > 0) {
              result.resultTypes.push({
                results: result[name],
                displayType: type,
                type: type,
                name: name
              });
            }
          });
        });

        return promise;
      }
    });
  });
define("sonatribe-ui/mixins/singleton", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Mixin.create({
      current: function () {
        if (!this._current) {
          this._current = this.createCurrent();
        }

        return this._current;
      },

      createCurrent: function () {
        console.log("into the empty create methiod");
        return this.create({});
      },

      currentProp: function (property, value) {
        var instance = this.current();
        if (!instance) {
          return;
        }

        if (typeof value !== "undefined") {
          instance.set(property, value);
          return value;
        } else {
          return instance.get(property);
        }
      },

      resetCurrent: function (val) {
        this._current = val;
      }
    });
  });
define("sonatribe-ui/mixins/sonatribe-ajax", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Mixin.create({
      ajax: function () {
        var url, args;

        if (arguments.length === 1) {
          if (typeof arguments[0] === "string") {
            url = arguments[0];
            args = {};
          } else {
            args = arguments[0];
            url = args.url;
            delete args.url;
          }
        } else if (arguments.length === 2) {
          url = arguments[0];
          args = arguments[1];
        }

        if (args.success) {
          Ember.Logger.error("DEPRECATION: Sonatribe.ajax should use promises, received \"success\" callback");
        }
        if (args.error) {
          Ember.Logger.error("DEPRECATION: Sonatribe.ajax should use promises, received \"error\" callback");
        }

        var performAjax = function (resolve, reject) {
          var oldSuccess = args.success;
          args.success = function (xhr) {
            Ember.run(null, resolve, xhr);
            if (oldSuccess) {
              oldSuccess(xhr);
            }
          };

          var oldError = args.error;
          args.error = function (xhr, textStatus) {
            // If it's a parsererror, don't reject
            if (xhr.status === 200) {
              return args.success(xhr);
            }

            // Fill in some extra info
            xhr.jqTextStatus = textStatus;
            xhr.requestedUrl = url;

            Ember.run(null, reject, xhr);
            if (oldError) {
              oldError(xhr);
            }
          };

          // We default to JSON on GET. If we don't, sometimes if the server doesn't return the proper header
          // it will not be parsed as an object.
          if (!args.type) {
            args.type = "GET";
          }
          if (!args.dataType && args.type.toUpperCase() === "GET") {
            args.dataType = "json";
          }

          if (args.type === "GET" && args.cache !== true) {
            args.cache = false;
          }

          args.crossDomain = true;
          args.xhrFields = { withCredentials: true };

          Ember.$.ajax(Sonatribe.SiteSettings.apiUrl + url, args);
        };

        return new Ember.RSVP.Promise(performAjax);
      }
    });
  });
define("sonatribe-ui/mixins/sonatribe-debounce", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Mixin.create({
      debounce: function (func, wait) {
        var self, args;
        var later = function () {
          func.apply(self, args);
        };

        return function () {
          self = this;
          args = arguments;

          Ember.run.debounce(null, later, wait);
        };
      }
    });
  });
define("sonatribe-ui/models/artist", 
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];

    __exports__["default"] = DS.Model.extend({
      slug: DS.attr("string"),
      name: DS.attr("string"),
      images: DS.hasMany("image", { async: true }),
      listingEvent: DS.belongsTo("listingEvent") });
  });
define("sonatribe-ui/models/event-instance", 
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];

    __exports__["default"] = DS.Model.extend({
      slug: DS.attr("string"),
      modified: DS.attr("string"),
      importId: DS.attr("string"),
      name: DS.attr("string"),
      fromDate: DS.attr("string"),
      toDate: DS.attr("string"),
      locations: DS.hasMany("location", { async: true }),
      usersAttending: DS.hasMany("user", { async: true })
      //images: DS.hasMany('image'),
      //image: DS.belingsTo('image')
    });
  });
define("sonatribe-ui/models/image", 
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];

    __exports__["default"] = DS.Model.extend({
      name: DS.attr("string"),
      artist: DS.belongsTo("artist"),
      fullPath: (function () {
        return Sonatribe.ApiUrl + "/image/" + this.get("name") + "?size=smallsquare";
      }).property()
    });
  });
define("sonatribe-ui/models/listing-event", 
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];

    __exports__["default"] = DS.Model.extend({
      currentUserAttending: DS.attr(),
      name: DS.attr(),
      slug: DS.attr("string"),
      start: DS.attr("string"),
      end: DS.attr("string"),
      eventInstanceSlug: DS.attr("string"),
      location: DS.belongsTo("location"),
      artists: DS.hasMany("artist", { async: true }),
      usersAttending: DS.hasMany("user", { async: true })
    });

    //http://emberjs.jsbin.com/tepeqo/2/edit
  });
define("sonatribe-ui/models/location", 
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];

    __exports__["default"] = DS.Model.extend({
      slug: DS.attr("string"),
      name: DS.attr("string"),

      eventInstance: DS.belongsTo("eventInstance"),
      listingEvents: DS.hasMany("listingEvent", { async: true })
    });
  });
define("sonatribe-ui/models/user", 
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];

    __exports__["default"] = DS.Model.extend({
      eventsAttending: DS.hasMany("eventInstance", { async: true }),
      slug: DS.attr("string"),
      name: DS.attr("string"),
      username: DS.attr("string"),
      profilePictureUrl: DS.attr("string"),
      auth: DS.attr("string") });
    //images: DS.hasMany('image', { async:true }),
  });
define("sonatribe-ui/router", 
  ["ember","sonatribe-ui/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    var Router = Ember.Router.extend({
      location: config.locationType
    });

    Router.map(function () {
      this.route("user-profile", { path: "/user/:Slug" });

      this.resource("event-profile", { path: "/event/:Slug" }, function () {
        this.route("lineup-viewer", { path: "/" });
      });

      this.route("artist-profile", { path: "/artist/:Slug" });
      this.route("listing-event", { path: "/lineup/:Slug" });
      this.route("sonatribe");

      this.route("admin", { path: "/admin/:Slug" });
      this.route("unauthorized");
      this.route("manage-account");
      this.route("event-profile/lineup-viewer");
      this.route("manageAccount");
    });

    __exports__["default"] = Router;
  });
define("sonatribe-ui/routes/admin", 
  ["ember","sonatribe-ui/mixins/has-current-user","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var HasCurrentUser = __dependency2__["default"];

    __exports__["default"] = Ember.Route.extend(HasCurrentUser, {
      model: function () {
        this.set("currentUser", this.currentUser);
      },
      access: ["Admin"],
      setupController: function (controller) {
        this.set("currentUser", this.currentUser);
        this.store.find("event-instance").then(function (result) {
          controller.set("model", result);
        });
      },
      beforeModel: function () {
        var found = false;

        for (var i = 0; i < this.get("access").length; i++) {
          if (this.get("currentUser.Roles").indexOf(this.get("access")[i]) > -1) {
            found = true;
            break;
          }
        }

        if (found) {
          return true;
        }

        // manage the unauthorized attempt
        this.transitionTo("unauthorized"); // or whatever
      }
    });
  });
define("sonatribe-ui/routes/application", 
  ["ember","sonatribe-ui/routes/sonatribe","simple-auth/mixins/application-route-mixin","sonatribe-ui/models/user","sonatribe-ui/mixins/has-current-user","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var SonatribeRoute = __dependency2__["default"];
    var ApplicationRouteMixin = __dependency3__["default"];
    var User = __dependency4__["default"];
    var HasCurrentUser = __dependency5__["default"];

    var ApplicationRoute = SonatribeRoute.extend(ApplicationRouteMixin, HasCurrentUser, {
      actions: {
        // action to trigger authentication with Torii
        authenticateFacebook: function () {
          var rte = this;

          this.get("session").authenticate("simple-auth-authenticator:torii", "facebook-connect").then(function () {
            var accessToken = rte.get("session").get("content").accessToken;

            //TODO: replace this with a model save
            Ember.$.ajax({
              url: Sonatribe.SiteSettings.apiUrl + "/auths/facebook_access_token?code=" + accessToken,
              dataType: "json",
              success: function (authResponse) {
                console.log(authResponse);

                rte.store.find("user", authResponse.id).then(function (user) {
                  User.resetCurrent(user);

                  if (user.get("username") === undefined || user.get("username") == null) {
                    FB.api("/me/picture", {
                      redirect: true,
                      height: "101",
                      type: "normal",
                      width: "101"
                    }, function (response) {
                      if (response && !response.error) {
                        user.set("profilePictureUrl", response.data.url);
                        user.save();
                        User.resetCurrent(user);
                        rte.currentUser = user;

                        //TODO: need to merge our user with the simple-auth session
                        // so we can rebuild the UI later on refresh etc

                        rte.transitionTo("manageAccount");
                      }
                    });

                  }
                });

              },
              error: function (err) {
                console.log(err);
              }
            });
          });

          return false;
        }
      }
    });

    Ember.RSVP.EventTarget.mixin(ApplicationRoute);
    __exports__["default"] = ApplicationRoute;
  });
define("sonatribe-ui/routes/artist-profile", 
  ["ember","sonatribe-ui/mixins/sonatribe-ajax","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Ajax = __dependency2__["default"];

    __exports__["default"] = Ember.Route.extend(Ajax, {
      model: function (params) {
        return this.ajax("Artist/" + params.Slug, { id: params.Slug }).then(function (response) {
          return response.artists[0];
        });
      }
    });
  });
define("sonatribe-ui/routes/event-profile", 
  ["ember","sonatribe-ui/mixins/sonatribe-ajax","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Ajax = __dependency2__["default"];

    __exports__["default"] = Ember.Route.extend(Ajax, {
      model: function (params) {
        this.set("slug", params.Slug);
        return Ember.RSVP.hash({
          eventProfile: this.ajax("EventInstances/" + params.Slug, { id: params.Slug }).then(function (response) {
            return response.eventInstances[0];
          })
        });
      } });
  });
define("sonatribe-ui/routes/event-profile/lineup-viewer", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Route.extend({
      needs: "event-profile",
      model: function () {
        var parentmodel = this.modelFor("eventProfile");
        return this.store.find("listingEvent", { eventinstanceSlug: parentmodel.eventProfile.slug, skip: 0, take: 20 }).then(function (results) {
          return results;
        });
      },
      actions: {
        toggleAttendance: function (m) {
          var id = m.get("id");
          var toggle = !m.get("currentUserAttending");

          this.store.find("listingEvent", id).then(function (model) {
            model.set("currentUserAttending", toggle);
            model.save();
          });
        }
      }
    });
  });
define("sonatribe-ui/routes/lineup-viewer", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Route.extend({
      needs: "event-profile",
      model: function () {
        var parentmodel = this.modelFor("eventProfile");
        return this.store.find("listingEvent", { eventinstanceSlug: parentmodel.eventProfile.slug, skip: 0, take: 20 }).then(function (results) {
          return results;
        });
      },
      actions: {
        toggleAttendance: function (m) {
          var id = m.get("id");
          var toggle = !m.get("currentUserAttending");

          this.store.find("listingEvent", id).then(function (model) {
            model.set("currentUserAttending", toggle);
            model.save();
          });
        }
      }
    });
  });
define("sonatribe-ui/routes/listing-event", 
  ["ember","sonatribe-ui/mixins/sonatribe-ajax","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Ajax = __dependency2__["default"];

    __exports__["default"] = Ember.Route.extend(Ajax, {
      model: function (params) {
        return this.store.find("listingEvent", { slug: params.Slug }).then(function (result) {
          var res = result.get("firstObject");
          return res;
        });
      }
    });
  });
define("sonatribe-ui/routes/manage-account", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Route.extend({});
  });
define("sonatribe-ui/routes/sonatribe", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Route.extend({});
  });
define("sonatribe-ui/routes/unauthorized", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Route.extend({});
  });
define("sonatribe-ui/routes/user-profile", 
  ["ember","sonatribe-ui/mixins/sonatribe-ajax","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Ajax = __dependency2__["default"];

    __exports__["default"] = Ember.Route.extend(Ajax, {
      model: function (params) {
        return this.ajax("Model/User/" + params.Slug, { id: params.Slug }).then(function (response) {
          return response.result;
        });
      }
    });
  });
define("sonatribe-ui/services/validations", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    var set = Ember.set;

    __exports__["default"] = Ember.Object.extend({
      init: function () {
        set(this, "cache", {});
      }
    });
  });
define("sonatribe-ui/templates/admin", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, self=this, escapeExpression=this.escapeExpression;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n	<li>\n		");
      stack1 = helpers._triageMustache.call(depth0, "ei.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n		\n		<ul>\n			");
      stack1 = helpers.each.call(depth0, "location", "in", "ei.locations", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n		</ul>\n	</li>\n");
      return buffer;
      }
    function program2(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n				<li>\n					");
      stack1 = helpers._triageMustache.call(depth0, "location.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n					<ul>\n						");
      stack1 = helpers.each.call(depth0, "listingEvent", "in", "location.listingEvents", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n					</ul>\n				</li>\n			");
      return buffer;
      }
    function program3(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n							<li>");
      stack1 = helpers._triageMustache.call(depth0, "listingEvent.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push(" </li>\n\n						");
      return buffer;
      }

      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\nthis is the admin section\n\n");
      data.buffer.push(escapeExpression(helpers.log.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push("\n\n<ul>\n");
      stack1 = helpers.each.call(depth0, "ei", "in", "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n</ul>\n\n<button id=\"clear-completed\" ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "createNew", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push(">\n    create new test\n</button>");
      return buffer;
      
    });
  });
define("sonatribe-ui/templates/application", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


      data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "header", options) : helperMissing.call(depth0, "render", "header", options))));
      data.buffer.push("\n\n<div id='main-outlet'>\n  ");
      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n</div>\n");
      return buffer;
      
    });
  });
define("sonatribe-ui/templates/artist-profile", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, self=this;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n	<li>");
      stack1 = helpers._triageMustache.call(depth0, "e.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</li>\n");
      return buffer;
      }

      data.buffer.push("\n<br><br><br><br><br>\n\ntest user profile new: <br>\n\n<div>name: ");
      stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</div>\n\n<div>events played at:</div>\n<ul>\n");
      stack1 = helpers.each.call(depth0, "e", "in", "eventsPlayedAt", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n</ul>\n\n<div>bio: ");
      stack1 = helpers._triageMustache.call(depth0, "bio.content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</div>\n\n\n\n");
      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("sonatribe-ui/templates/artist", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '';


      return buffer;
      
    });
  });
define("sonatribe-ui/templates/components/em-form-control-help", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var stack1;


      stack1 = helpers._triageMustache.call(depth0, "helpText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      else { data.buffer.push(''); }
      
    });
  });
define("sonatribe-ui/templates/components/em-form-group", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

    function program1(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n    <div ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'class': ("wrapperClass")
      },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">\n        ");
      data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "components/formgroup/form-group", options) : helperMissing.call(depth0, "partial", "components/formgroup/form-group", options))));
      data.buffer.push("\n    </div>\n");
      return buffer;
      }

    function program3(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n    ");
      data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "components/formgroup/form-group", options) : helperMissing.call(depth0, "partial", "components/formgroup/form-group", options))));
      data.buffer.push("\n");
      return buffer;
      }

      stack1 = helpers['if'].call(depth0, "wrapperClass", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      else { data.buffer.push(''); }
      
    });
  });
define("sonatribe-ui/templates/components/em-form-label", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1;


      stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      return buffer;
      
    });
  });
define("sonatribe-ui/templates/components/em-form-submit", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var stack1, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n    <div ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'class': ("horiClass")
      },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">\n        <button ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'class': ("classes")
      },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(" ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'disabled': ("disabled")
      },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">");
      stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</button>\n    </div>\n");
      return buffer;
      }

    function program3(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n    <button ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'class': ("classes")
      },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(" ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'disabled': ("disabled")
      },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">");
      stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</button>\n");
      return buffer;
      }

      stack1 = helpers['if'].call(depth0, "form.isHorizontal", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      else { data.buffer.push(''); }
      
    });
  });
define("sonatribe-ui/templates/components/em-form", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, self=this;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n    ");
      stack1 = helpers._triageMustache.call(depth0, "em-form-submit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      }

      stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      stack1 = helpers['if'].call(depth0, "submit_button", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      return buffer;
      
    });
  });
define("sonatribe-ui/templates/components/em-modal-confirm", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

    function program1(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n    ");
      stack1 = (helper = helpers['em-modal-title'] || (depth0 && depth0['em-modal-title']),options={hash:{
        'classes': ("modal-title-classes")
      },hashTypes:{'classes': "ID"},hashContexts:{'classes': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-modal-title", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    ");
      options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data}
      if (helper = helpers['em-modal-body']) { stack1 = helper.call(depth0, options); }
      else { helper = (depth0 && depth0['em-modal-body']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
      if (!helpers['em-modal-body']) { stack1 = blockHelperMissing.call(depth0, 'em-modal-body', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data}); }
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    ");
      options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[],types:[],data:data}
      if (helper = helpers['em-modal-footer']) { stack1 = helper.call(depth0, options); }
      else { helper = (depth0 && depth0['em-modal-footer']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
      if (!helpers['em-modal-footer']) { stack1 = blockHelperMissing.call(depth0, 'em-modal-footer', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[],types:[],data:data}); }
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      }
    function program2(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n        ");
      stack1 = (helper = helpers['em-modal-toggler'] || (depth0 && depth0['em-modal-toggler']),options={hash:{
        'class': ("close")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-modal-toggler", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n        <h4 class=\"modal-title\">");
      stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</h4>\n    ");
      return buffer;
      }
    function program3(depth0,data) {
      
      
      data.buffer.push("<span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>");
      }

    function program5(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n        ");
      stack1 = helpers._triageMustache.call(depth0, "message", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n        ");
      stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n        <!--Confirmation with a reason-->\n        ");
      stack1 = helpers['if'].call(depth0, "reasonModal", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    ");
      return buffer;
      }
    function program6(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n        ");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
        'valueBinding': ("message"),
        'contentBinding': ("messages"),
        'optionValuePath': ("id"),
        'optionLabelPath': ("content.msg")
      },hashTypes:{'valueBinding': "STRING",'contentBinding': "STRING",'optionValuePath': "STRING",'optionLabelPath': "STRING"},hashContexts:{'valueBinding': depth0,'contentBinding': depth0,'optionValuePath': depth0,'optionLabelPath': depth0},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push("\n        ");
      return buffer;
      }

    function program8(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n        ");
      data.buffer.push(escapeExpression((helper = helpers['em-button'] || (depth0 && depth0['em-button']),options={hash:{
        'class': ("cancel-button-classes"),
        'on-click': ("confirmPressed"),
        'default': ("submit-button-title"),
        'icon-default': ("submit-button-default-icons"),
        'icon-executing': ("submit-button-execute-icons"),
        'executing': ("submit-button-submitting-title")
      },hashTypes:{'class': "ID",'on-click': "STRING",'default': "ID",'icon-default': "ID",'icon-executing': "ID",'executing': "ID"},hashContexts:{'class': depth0,'on-click': depth0,'default': depth0,'icon-default': depth0,'icon-executing': depth0,'executing': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-button", options))));
      data.buffer.push("\n        ");
      stack1 = (helper = helpers['em-modal-toggler'] || (depth0 && depth0['em-modal-toggler']),options={hash:{
        'class': ("submit-button-classes")
      },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-modal-toggler", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    ");
      return buffer;
      }
    function program9(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n            <i class=\"fa fa-thumbs-o-down\"></i>\n            ");
      stack1 = helpers._triageMustache.call(depth0, "cancel-button-title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n        ");
      return buffer;
      }

      stack1 = (helper = helpers['em-modal'] || (depth0 && depth0['em-modal']),options={hash:{
        'id': ("confirm-id"),
        'configName': ("configName"),
        'model-id': ("model-id"),
        'open-if': ("open-if"),
        'close-if': ("close-if"),
        'on-hide': ("on-hide")
      },hashTypes:{'id': "ID",'configName': "ID",'model-id': "ID",'open-if': "ID",'close-if': "ID",'on-hide': "ID"},hashContexts:{'id': depth0,'configName': depth0,'model-id': depth0,'open-if': depth0,'close-if': depth0,'on-hide': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-modal", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      else { data.buffer.push(''); }
      
    });
  });
define("sonatribe-ui/templates/components/em-modal", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var stack1, self=this;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            ");
      stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n        </div>\n    </div>\n");
      return buffer;
      }

      stack1 = helpers['if'].call(depth0, "is-open", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      else { data.buffer.push(''); }
      
    });
  });
define("sonatribe-ui/templates/components/formgroup/control-within-label", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n    ");
      data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "components/formgroup/form-group-control", options) : helperMissing.call(depth0, "partial", "components/formgroup/form-group-control", options))));
      data.buffer.push("\n");
      return buffer;
      }

      stack1 = (helper = helpers['em-form-label'] || (depth0 && depth0['em-form-label']),options={hash:{
        'text': ("label"),
        'horiClass': (""),
        'inlineClass': (""),
        'viewName': ("labelViewName")
      },hashTypes:{'text': "ID",'horiClass': "STRING",'inlineClass': "STRING",'viewName': "ID"},hashContexts:{'text': depth0,'horiClass': depth0,'inlineClass': depth0,'viewName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-form-label", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      else { data.buffer.push(''); }
      
    });
  });
define("sonatribe-ui/templates/components/formgroup/form-group-control", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var stack1, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n    <div ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'class': ("controlWrapper")
      },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">\n        ");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "controlView", {hash:{
        'viewName': ("controlViewName"),
        'property': ("propertyName"),
        'id': ("cid")
      },hashTypes:{'viewName': "ID",'property': "ID",'id': "ID"},hashContexts:{'viewName': depth0,'property': depth0,'id': depth0},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push("\n    </div>\n");
      return buffer;
      }

    function program3(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n    ");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "controlView", {hash:{
        'viewName': ("controlViewName"),
        'property': ("propertyName"),
        'id': ("cid")
      },hashTypes:{'viewName': "ID",'property': "ID",'id': "ID"},hashContexts:{'viewName': depth0,'property': depth0,'id': depth0},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push("\n");
      return buffer;
      }

      stack1 = helpers['if'].call(depth0, "controlWrapper", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      else { data.buffer.push(''); }
      
    });
  });
define("sonatribe-ui/templates/components/formgroup/form-group", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n    ");
      stack1 = helpers['if'].call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(13, program13, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n    ");
      stack1 = helpers['if'].call(depth0, "v_icons", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n    \n    ");
      stack1 = helpers.unless.call(depth0, "form.isInline", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      }
    function program2(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n        ");
      stack1 = helpers['if'].call(depth0, "yieldInLabel", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    ");
      return buffer;
      }
    function program3(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n            ");
      stack1 = helpers['if'].call(depth0, "labelWrapperClass", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n        ");
      return buffer;
      }
    function program4(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n                <div ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'class': ("labelWrapperClass")
      },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">\n                    ");
      data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "components/formgroup/control-within-label", options) : helperMissing.call(depth0, "partial", "components/formgroup/control-within-label", options))));
      data.buffer.push("\n                </div>\n            ");
      return buffer;
      }

    function program6(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n                ");
      data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "components/formgroup/control-within-label", options) : helperMissing.call(depth0, "partial", "components/formgroup/control-within-label", options))));
      data.buffer.push("\n            ");
      return buffer;
      }

    function program8(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n            ");
      stack1 = helpers['if'].call(depth0, "labelWrapperClass", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n        ");
      return buffer;
      }
    function program9(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n                <div ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'class': ("labelWrapperClass")
      },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">\n                    ");
      data.buffer.push(escapeExpression((helper = helpers['em-form-label'] || (depth0 && depth0['em-form-label']),options={hash:{
        'text': ("label"),
        'viewName': ("labelViewName")
      },hashTypes:{'text': "ID",'viewName': "ID"},hashContexts:{'text': depth0,'viewName': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-form-label", options))));
      data.buffer.push("\n                    ");
      data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "components/formgroup/form-group-control", options) : helperMissing.call(depth0, "partial", "components/formgroup/form-group-control", options))));
      data.buffer.push("\n                </div>\n            ");
      return buffer;
      }

    function program11(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n                ");
      data.buffer.push(escapeExpression((helper = helpers['em-form-label'] || (depth0 && depth0['em-form-label']),options={hash:{
        'text': ("label"),
        'viewName': ("labelViewName")
      },hashTypes:{'text': "ID",'viewName': "ID"},hashContexts:{'text': depth0,'viewName': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-form-label", options))));
      data.buffer.push("\n                ");
      data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "components/formgroup/form-group-control", options) : helperMissing.call(depth0, "partial", "components/formgroup/form-group-control", options))));
      data.buffer.push("\n            ");
      return buffer;
      }

    function program13(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n        ");
      data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "components/formgroup/form-group-control", options) : helperMissing.call(depth0, "partial", "components/formgroup/form-group-control", options))));
      data.buffer.push("\n    ");
      return buffer;
      }

    function program15(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n        <span class=\"form-control-feedback\"><i ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'class': ("v_icon")
      },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push("></i></span>\n    ");
      return buffer;
      }

    function program17(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n        ");
      stack1 = helpers['if'].call(depth0, "canShowErrors", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    ");
      return buffer;
      }
    function program18(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n            ");
      data.buffer.push(escapeExpression((helper = helpers['em-form-control-help'] || (depth0 && depth0['em-form-control-help']),options={hash:{
        'text': ("help"),
        'viewName': ("helpViewName")
      },hashTypes:{'text': "ID",'viewName': "ID"},hashContexts:{'text': depth0,'viewName': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-form-control-help", options))));
      data.buffer.push("\n        ");
      return buffer;
      }

    function program20(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n    ");
      stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      }

      stack1 = helpers.unless.call(depth0, "template", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(20, program20, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      else { data.buffer.push(''); }
      
    });
  });
define("sonatribe-ui/templates/components/home-logo", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', escapeExpression=this.escapeExpression;


      data.buffer.push("<a href=\"\" data-auto-route=\"true\">\n  <img id=\"site-logo\" class=\"logo-big\" src=\"");
      data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "bigLogoUrl", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push("\" alt=\"");
      data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push("\">\n</a>\n");
      return buffer;
      
    });
  });
define("sonatribe-ui/templates/components/text-field", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '';


      return buffer;
      
    });
  });
define("sonatribe-ui/templates/event-profile", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1;


      data.buffer.push("\n<br><br><br>\n\nEvent name: ");
      stack1 = helpers._triageMustache.call(depth0, "eventProfile.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<br>\nlineup (1st 10 items)\n<br>\n\n");
      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("sonatribe-ui/templates/event-profile/lineup-viewer", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n	");
      data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "linup-list", "model", options) : helperMissing.call(depth0, "render", "linup-list", "model", options))));
      data.buffer.push("\n");
      return buffer;
      }

    function program3(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n	");
      data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "linup-grid", "model", options) : helperMissing.call(depth0, "render", "linup-grid", "model", options))));
      data.buffer.push("\n");
      return buffer;
      }

      data.buffer.push("<button id=\"clear-completed\" ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextPage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push(">\n    Toggle View\n</button>\n<button id=\"clear-completed\" ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleAttendance", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push(">\n    test\n</button>\n\n");
      data.buffer.push(escapeExpression(helpers.log.call(depth0, "model", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push("\n\n");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "search-text-field", {hash:{
        'value': ("term"),
        'searchContextEnabled': ("searchContextEnabled"),
        'searchContext': ("searchContext"),
        'id': ("lineup-search-term")
      },hashTypes:{'value': "ID",'searchContextEnabled': "ID",'searchContext': "ID",'id': "STRING"},hashContexts:{'value': depth0,'searchContextEnabled': depth0,'searchContext': depth0,'id': depth0},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push("\n\n");
      stack1 = helpers['if'].call(depth0, "renderList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n");
      stack1 = helpers['if'].call(depth0, "renderGrid", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n");
      return buffer;
      
    });
  });
define("sonatribe-ui/templates/header", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

    function program1(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n\n        ");
      stack1 = (helper = helpers['em-modal-toggler'] || (depth0 && depth0['em-modal-toggler']),options={hash:{
        'modal-id': ("login"),
        'class': ("btn btn-primary")
      },hashTypes:{'modal-id': "STRING",'class': "STRING"},hashContexts:{'modal-id': depth0,'class': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-modal-toggler", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n        ");
      stack1 = (helper = helpers['em-modal-toggler'] || (depth0 && depth0['em-modal-toggler']),options={hash:{
        'modal-id': ("signup"),
        'class': ("btn btn-primary")
      },hashTypes:{'modal-id': "STRING",'class': "STRING"},hashContexts:{'modal-id': depth0,'class': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-modal-toggler", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n        ");
      data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "modal/create-account", options) : helperMissing.call(depth0, "render", "modal/create-account", options))));
      data.buffer.push("\n        ");
      data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "modal/login", options) : helperMissing.call(depth0, "render", "modal/login", options))));
      data.buffer.push("\n\n\n      ");
      return buffer;
      }
    function program2(depth0,data) {
      
      
      data.buffer.push("log in");
      }

    function program4(depth0,data) {
      
      
      data.buffer.push("sign up");
      }

    function program6(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n        <li class='current-user dropdown'>\n            <a class='icon'\n               data-dropdown=\"user-dropdown\"\n               data-render=\"renderUserDropdown\"\n               href=\"#\"\n\n               id=\"current-user\">\n\n                 ");
      data.buffer.push(escapeExpression((helper = helpers['bound-avatar'] || (depth0 && depth0['bound-avatar']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data},helper ? helper.call(depth0, "currentUser.data", "medium", options) : helperMissing.call(depth0, "bound-avatar", "currentUser.data", "medium", options))));
      data.buffer.push("\n            </a>\n        </li>\n        ");
      return buffer;
      }

    function program8(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n          ");
      data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "site-map", options) : helperMissing.call(depth0, "render", "site-map", options))));
      data.buffer.push("\n        ");
      return buffer;
      }

      data.buffer.push("<div class='container'>\n  <div class='contents clearfix'>\n\n    ");
      data.buffer.push(escapeExpression((helper = helpers['home-logo'] || (depth0 && depth0['home-logo']),options={hash:{
        'minimized': ("showExtraInfo")
      },hashTypes:{'minimized': "ID"},hashContexts:{'minimized': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "home-logo", options))));
      data.buffer.push("\n\n    <div class='panel clearfix'>\n\n      ");
      stack1 = helpers.unless.call(depth0, "session.isAuthenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n      <ul class='icons clearfix' role='navigation'>\n        <li>\n            <a id='search-button'\n               class='icon expand'\n               href='#'\n               data-dropdown=\"search-dropdown\"\n               title='search mother fucker'>\n               ");
      data.buffer.push(escapeExpression((helper = helpers['icon-helper'] || (depth0 && depth0['icon-helper']),options={hash:{
        'label': ("search.title")
      },hashTypes:{'label': "STRING"},hashContexts:{'label': depth0},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "search", options) : helperMissing.call(depth0, "icon-helper", "search", options))));
      data.buffer.push("\n            </a>\n        </li>\n        <li class='categories dropdown'>\n\n           <a class='icon'\n               data-dropdown=\"site-map-dropdown\"\n               data-render=\"renderSiteMap\"\n               href=\"#\"\n               title='site map'\n               id=\"site-map\">\n               ");
      data.buffer.push(escapeExpression((helper = helpers['icon-helper'] || (depth0 && depth0['icon-helper']),options={hash:{
        'label': ("site_map")
      },hashTypes:{'label': "STRING"},hashContexts:{'label': depth0},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "bars", options) : helperMissing.call(depth0, "icon-helper", "bars", options))));
      data.buffer.push("\n            </a>\n\n        </li>\n         ");
      stack1 = helpers['if'].call(depth0, "currentUser", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n      </ul>\n        ");
      data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "search", options) : helperMissing.call(depth0, "render", "search", options))));
      data.buffer.push("\n\n        ");
      stack1 = helpers['if'].call(depth0, "view.renderSiteMap", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n        ");
      data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "user-dropdown", options) : helperMissing.call(depth0, "render", "user-dropdown", options))));
      data.buffer.push("\n    </div>\n  </div>\n</div>\n");
      return buffer;
      
    });
  });
define("sonatribe-ui/templates/home-logo", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', escapeExpression=this.escapeExpression;


      data.buffer.push("<a href=\"\" data-auto-route=\"true\">\n  <img id=\"site-logo\" class=\"logo-big\" src=\"");
      data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "bigLogoUrl", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push("\" alt=\"");
      data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push("\">\n</a>\n");
      return buffer;
      
    });
  });
define("sonatribe-ui/templates/linup-grid", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

    function program1(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n       \n        <li class='heading row'>\n        <b>users attending: ");
      stack1 = helpers._triageMustache.call(depth0, "le.usersAttending.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n        <b>  ");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "listing-event", "le.slug", options) : helperMissing.call(depth0, "link-to", "listing-event", "le.slug", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push(" - ");
      stack1 = helpers._triageMustache.call(depth0, "le.start", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push(" - ");
      stack1 = helpers._triageMustache.call(depth0, "le.end", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</b>\n        <div> locationId: ");
      stack1 = helpers._triageMustache.call(depth0, "le.locationName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</div>\n        ");
      stack1 = helpers['if'].call(depth0, "le.currentUserAttending", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n        </li>\n     \n");
      return buffer;
      }
    function program2(depth0,data) {
      
      var stack1;
      stack1 = helpers._triageMustache.call(depth0, "le.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      else { data.buffer.push(''); }
      }

    function program4(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n        <button id=\"clear-completed\" ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleAttendance", "le", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
      data.buffer.push(">\n            don't go ");
      stack1 = helpers._triageMustache.call(depth0, "le.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n        </button>\n        ");
      return buffer;
      }

    function program6(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n        <button id=\"clear-completed\" ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleAttendance", "le", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
      data.buffer.push(">\n            lets go ");
      stack1 = helpers._triageMustache.call(depth0, "le.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n        </button>\n        ");
      return buffer;
      }

      data.buffer.push("grid\n\n<style>\nul.block-grid-3 {\n   display: block;\n   overflow: hidden;\n   padding: 0;\n   -webkit-box-sizing: border-box;\n   -moz-box-sizing: border-box;\n   box-sizing: border-box;\n}\nul.block-grid-3 > li {\n   width: 33.33333%;\n   float: left;\n   padding: 0 12px 12px;\n   display: block;\n   height: auto;\n   -webkit-box-sizing: border-box;\n   -moz-box-sizing: border-box;\n   box-sizing: border-box;\n}\nul.block-grid-3 > li:nth-of-type(3n+1) {\n   clear: left;\n}\n</style>\n\n <ul class=\"row-fluid block-grid-3\">\n");
      stack1 = helpers.each.call(depth0, "le", "in", "", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n </ul>");
      return buffer;
      
    });
  });
define("sonatribe-ui/templates/linup-list", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

    function program1(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n      \n        <li class='heading row'>\n        <b>  ");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "listing-event", "le.slug", options) : helperMissing.call(depth0, "link-to", "listing-event", "le.slug", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push(" - ");
      stack1 = helpers._triageMustache.call(depth0, "le.start", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push(" - ");
      stack1 = helpers._triageMustache.call(depth0, "le.end", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</b>\n        <br>\n        locationId: ");
      stack1 = helpers._triageMustache.call(depth0, "le.locationName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n        </li>\n     \n");
      return buffer;
      }
    function program2(depth0,data) {
      
      var stack1;
      stack1 = helpers._triageMustache.call(depth0, "le.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      else { data.buffer.push(''); }
      }

      data.buffer.push("List\n<ul>\n");
      stack1 = helpers.each.call(depth0, "le", "in", "", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n </ul>");
      return buffer;
      
    });
  });
define("sonatribe-ui/templates/listing-event", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

    function program1(depth0,data) {
      
      
      data.buffer.push("back to event");
      }

    function program3(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n        <button id=\"clear-completed\" ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleAttendance", "le", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
      data.buffer.push(">\n            don't go ");
      stack1 = helpers._triageMustache.call(depth0, "model.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n        </button>\n");
      return buffer;
      }

    function program5(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n        <button id=\"clear-completed\" ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleAttendance", "le", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
      data.buffer.push(">\n            lets go ");
      stack1 = helpers._triageMustache.call(depth0, "model.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n        </button>\n");
      return buffer;
      }

    function program7(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n	<li>");
      data.buffer.push(escapeExpression((helper = helpers['bound-avatar'] || (depth0 && depth0['bound-avatar']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data},helper ? helper.call(depth0, "user.data", "medium", options) : helperMissing.call(depth0, "bound-avatar", "user.data", "medium", options))));
      data.buffer.push("</li>\n");
      return buffer;
      }

    function program9(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n<li>artist ID: ");
      stack1 = helpers._triageMustache.call(depth0, "artist.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</li>\n<li>artist name: ");
      stack1 = helpers._triageMustache.call(depth0, "artist.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</li>\n<li>artist bio: ");
      stack1 = helpers._triageMustache.call(depth0, "artist.bio.content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</li>\n<br /> familiarity: ");
      stack1 = helpers._triageMustache.call(depth0, "artist.stats.familiarity", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<br /> hotttness: ");
      stack1 = helpers._triageMustache.call(depth0, "artist.stats.hotttnesss", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<br /> \ntracks:<br />\n");
      stack1 = helpers.each.call(depth0, "track", "in", "artist.tracks.track", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<br /> \nimages<br />\n");
      stack1 = helpers.each.call(depth0, "image", "in", "artist.images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<li>--------------------------------------------------------</li>\n");
      return buffer;
      }
    function program10(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n");
      stack1 = helpers._triageMustache.call(depth0, "track.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push(", \n");
      return buffer;
      }

    function program12(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n\n");
      data.buffer.push(escapeExpression((helper = helpers['image-helper'] || (depth0 && depth0['image-helper']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data},helper ? helper.call(depth0, "image", "square", options) : helperMissing.call(depth0, "image-helper", "image", "square", options))));
      data.buffer.push("\n\n");
      return buffer;
      }

      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "event-profile", "model.eventInstanceSlug", options) : helperMissing.call(depth0, "link-to", "event-profile", "model.eventInstanceSlug", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<br />\nname: ");
      stack1 = helpers._triageMustache.call(depth0, "model.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<br />\nstart: ");
      stack1 = helpers._triageMustache.call(depth0, "model.start", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<br />\nend: ");
      stack1 = helpers._triageMustache.call(depth0, "model.end", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<br>\n\n");
      stack1 = helpers['if'].call(depth0, "model.currentUserAttending", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\nusers attending: ");
      stack1 = helpers._triageMustache.call(depth0, "model.usersAttending.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<br>\n<ul>\n");
      stack1 = helpers.each.call(depth0, "user", "in", "model.usersAttending", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n</ul>\n\n<ul>\n");
      stack1 = helpers.each.call(depth0, "artist", "in", "model.artists", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n</ul>");
      return buffer;
      
    });
  });
define("sonatribe-ui/templates/manage-account", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n    ");
      data.buffer.push(escapeExpression((helper = helpers['em-input'] || (depth0 && depth0['em-input']),options={hash:{
        'property': ("name"),
        'label': ("Full Name"),
        'placeholder': ("Enter a name...")
      },hashTypes:{'property': "STRING",'label': "STRING",'placeholder': "STRING"},hashContexts:{'property': depth0,'label': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-input", options))));
      data.buffer.push("\n    ");
      data.buffer.push(escapeExpression((helper = helpers['em-text'] || (depth0 && depth0['em-text']),options={hash:{
        'property': ("comment"),
        'label': ("Coment"),
        'placeholder': ("Comment please.."),
        'rows': (4)
      },hashTypes:{'property': "STRING",'label': "STRING",'placeholder': "STRING",'rows': "INTEGER"},hashContexts:{'property': depth0,'label': depth0,'placeholder': depth0,'rows': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-text", options))));
      data.buffer.push("\n    ");
      data.buffer.push(escapeExpression((helper = helpers['em-select'] || (depth0 && depth0['em-select']),options={hash:{
        'property': ("gender"),
        'label': ("Gender"),
        'prompt': ("-select-"),
        'contentBinding': ("genderOptions"),
        'optionValuePath': ("content.id"),
        'optionLabelPath': ("content.name")
      },hashTypes:{'property': "STRING",'label': "STRING",'prompt': "STRING",'contentBinding': "STRING",'optionValuePath': "STRING",'optionLabelPath': "STRING"},hashContexts:{'property': depth0,'label': depth0,'prompt': depth0,'contentBinding': depth0,'optionValuePath': depth0,'optionLabelPath': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-select", options))));
      data.buffer.push("\n    ");
      data.buffer.push(escapeExpression((helper = helpers['em-checkbox'] || (depth0 && depth0['em-checkbox']),options={hash:{
        'property': ("active"),
        'label': ("Active?")
      },hashTypes:{'property': "STRING",'label': "STRING"},hashContexts:{'property': depth0,'label': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-checkbox", options))));
      data.buffer.push("\n    ");
      return buffer;
      }

      data.buffer.push("\n\n<div class=\"container\">\n  <h4>Because you're new...</h4>\n<br>\n  ");
      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  <div class=\"col-sm-9 col-xs-12 page row well line-example\">\n    ");
      stack1 = (helper = helpers['em-form'] || (depth0 && depth0['em-form']),options={hash:{
        'form_layout': ("default")
      },hashTypes:{'form_layout': "STRING"},hashContexts:{'form_layout': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-form", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  </div>\n\n</div>\n");
      return buffer;
      
    });
  });
define("sonatribe-ui/templates/modal/create-account", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

    function program1(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n");
      options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data}
      if (helper = helpers['em-modal-title']) { stack1 = helper.call(depth0, options); }
      else { helper = (depth0 && depth0['em-modal-title']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
      if (!helpers['em-modal-title']) { stack1 = blockHelperMissing.call(depth0, 'em-modal-title', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data}); }
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<!--the content of the modal...-->\n");
      options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data}
      if (helper = helpers['em-modal-body']) { stack1 = helper.call(depth0, options); }
      else { helper = (depth0 && depth0['em-modal-body']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
      if (!helpers['em-modal-body']) { stack1 = blockHelperMissing.call(depth0, 'em-modal-body', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data}); }
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<!--optional footer section of the modal, usually contains buttons-->\n");
      options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[],types:[],data:data}
      if (helper = helpers['em-modal-footer']) { stack1 = helper.call(depth0, options); }
      else { helper = (depth0 && depth0['em-modal-footer']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
      if (!helpers['em-modal-footer']) { stack1 = blockHelperMissing.call(depth0, 'em-modal-footer', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[],types:[],data:data}); }
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      }
    function program2(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n<!--optional toggler to close the opened modal-->\n");
      stack1 = (helper = helpers['em-modal-toggler'] || (depth0 && depth0['em-modal-toggler']),options={hash:{
        'class': ("close")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-modal-toggler", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<h4 class=\"modal-title\">signup</h4>\n");
      return buffer;
      }
    function program3(depth0,data) {
      
      
      data.buffer.push("x");
      }

    function program5(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n");
      stack1 = helpers.unless.call(depth0, "complete", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      }
    function program6(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n\n");
      stack1 = helpers.unless.call(depth0, "hasAuthOptions", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n");
      stack1 = helpers['if'].call(depth0, "async", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n<div>\n  <form id=\"form-register\" action=\"https://sonatribe-api.herokuapp.com/api/register\" method=\"POST\">\n    ");
      stack1 = helpers._triageMustache.call(depth0, "service-stack", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    <table>\n      <tr class=\"input\">\n        <td style=\"width:80px\" class=\"label\"><label for='new-account-name'>your full name</label></td>\n        <td style=\"width:496px\">\n          ");
      data.buffer.push(escapeExpression((helper = helpers['text-field'] || (depth0 && depth0['text-field']),options={hash:{
        'value': ("accountName"),
        'id': ("new-account-name"),
        'autofocus': ("autofocus")
      },hashTypes:{'value': "ID",'id': "STRING",'autofocus': "STRING"},hashContexts:{'value': depth0,'id': depth0,'autofocus': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "text-field", options))));
      data.buffer.push("\n          &nbsp;\n        </td>\n      </tr>\n      <tr class=\"instructions\">\n        <td></td>\n        <td><label>username instructions</label></td>\n      </tr>\n\n      <tr class=\"input\">\n        <td class=\"label\"><label for='new-account-email'>email</label></td>\n        <td>\n          ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'type': ("email"),
        'value': ("accountEmail"),
        'id': ("new-account-email"),
        'disabled': ("emailValidated")
      },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'disabled': "ID"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'disabled': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n          &nbsp;\n        </td>\n      </tr>\n      <tr class=\"instructions\">\n        <td></td>\n        <td><label>email instrutuions</label></td>\n      </tr>\n\n      <tr class=\"input\">\n        <td class=\"label\"><label for='new-account-username'>username</label></td>\n        <td>\n          ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'value': ("accountUsername"),
        'id': ("new-account-username"),
        'maxlength': ("maxUsernameLength")
      },hashTypes:{'value': "ID",'id': "STRING",'maxlength': "ID"},hashContexts:{'value': depth0,'id': depth0,'maxlength': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n          &nbsp;\n        </td>\n      </tr>\n      <tr class=\"instructions\">\n        <td></td>\n        <td><label>username</label></td>\n      </tr>\n\n      ");
      stack1 = helpers['if'].call(depth0, "passwordRequired", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n      <tr class=\"password-confirmation\">\n        <td><label for='new-account-password-confirmation'>confirm password</label></td>\n        <td>\n          ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'type': ("password"),
        'value': ("accountPasswordConfirm"),
        'id': ("new-account-confirmation")
      },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n          ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'value': ("accountChallenge"),
        'id': ("new-account-challenge")
      },hashTypes:{'value': "ID",'id': "STRING"},hashContexts:{'value': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n        </td>\n      </tr>\n\n    </table>\n\n    ");
      stack1 = helpers['if'].call(depth0, "userFields", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n    <div id='modal-alert'></div>\n\n  </form>\n</div>\n\n");
      return buffer;
      }
    function program7(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n<a ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'href': ("facebookLoginUrl")
      },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">facebook</a>\n<a ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'href': ("twitter_login_url")
      },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">twitter</a>\n");
      return buffer;
      }

    function program9(depth0,data) {
      
      
      data.buffer.push("\nSubmitting, please wait...\n");
      }

    function program11(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n      <tr class=\"input\">\n        <td class=\"label\"><label for='new-account-password'>password</label></td>\n        <td>\n          ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'value': ("accountPassword"),
        'type': ("password"),
        'id': ("new-account-password"),
        'capsLockOn': ("capsLockOn")
      },hashTypes:{'value': "ID",'type': "STRING",'id': "STRING",'capsLockOn': "ID"},hashContexts:{'value': depth0,'type': depth0,'id': depth0,'capsLockOn': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n          &nbsp;\n        </td>\n      </tr>\n      <tr class=\"instructions\">\n        <td></td>\n        <td>\n          <label>");
      stack1 = helpers._triageMustache.call(depth0, "passwordInstructions", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</label>\n          <div ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'class': (":caps-lock-warning capsLockOn::invisible")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push("><i class=\"fa fa-exclamation-triangle\"></i> campslock</div>\n        </td>\n      </tr>\n      ");
      return buffer;
      }

    function program13(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n    <div class='user-fields'>\n      ");
      stack1 = helpers.each.call(depth0, "userFields", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    </div>\n    ");
      return buffer;
      }
    function program14(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n      ");
      data.buffer.push(escapeExpression((helper = helpers['user-field'] || (depth0 && depth0['user-field']),options={hash:{
        'field': ("field"),
        'value': ("value")
      },hashTypes:{'field': "ID",'value': "ID"},hashContexts:{'field': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "user-field", options))));
      data.buffer.push("\n      ");
      return buffer;
      }

    function program16(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n");
      stack1 = (helper = helpers['em-modal-toggler'] || (depth0 && depth0['em-modal-toggler']),options={hash:{
        'class': ("btn btn-default")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(17, program17, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-modal-toggler", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      }
    function program17(depth0,data) {
      
      
      data.buffer.push("Close");
      }

      stack1 = (helper = helpers['em-modal-form'] || (depth0 && depth0['em-modal-form']),options={hash:{
        'configName': ("bs"),
        'id': ("signup"),
        'in-async': ("async")
      },hashTypes:{'configName': "STRING",'id': "STRING",'in-async': "ID"},hashContexts:{'configName': depth0,'id': depth0,'in-async': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-modal-form", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("sonatribe-ui/templates/modal/login", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

    function program1(depth0,data) {
      
      
      data.buffer.push("\n\n");
      }

    function program3(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n");
      stack1 = (helper = helpers['em-modal-form'] || (depth0 && depth0['em-modal-form']),options={hash:{
        'configName': ("bs"),
        'id': ("login"),
        'in-async': ("async")
      },hashTypes:{'configName': "STRING",'id': "STRING",'in-async': "ID"},hashContexts:{'configName': depth0,'id': depth0,'in-async': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-modal-form", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n");
      return buffer;
      }
    function program4(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n");
      options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data}
      if (helper = helpers['em-modal-title']) { stack1 = helper.call(depth0, options); }
      else { helper = (depth0 && depth0['em-modal-title']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
      if (!helpers['em-modal-title']) { stack1 = blockHelperMissing.call(depth0, 'em-modal-title', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data}); }
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<!--the content of the modal...-->\n");
      options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[],types:[],data:data}
      if (helper = helpers['em-modal-body']) { stack1 = helper.call(depth0, options); }
      else { helper = (depth0 && depth0['em-modal-body']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
      if (!helpers['em-modal-body']) { stack1 = blockHelperMissing.call(depth0, 'em-modal-body', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[],types:[],data:data}); }
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n<button class=\"btn btn-large btn-primary\"\n");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'disabled': ("loginDisabled")
      },hashTypes:{'disabled': "STRING"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
      data.buffer.push("\n");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push(">\n<i class=\"fa fa-unlock\"></i>&nbsp;login\n</button>\n\n\n&nbsp;\n<button class=\"btn btn-large\" id=\"new-account-link\" ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "createAccount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push(" ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'disabled': ("async")
      },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">\n  create account\n</button>\n\n\n\n");
      stack1 = helpers['if'].call(depth0, "authenticate", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n");
      stack1 = helpers['if'].call(depth0, "showSpinner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[],types:[],data:data}
      if (helper = helpers['em-modal-footer']) { stack1 = helper.call(depth0, options); }
      else { helper = (depth0 && depth0['em-modal-footer']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
      if (!helpers['em-modal-footer']) { stack1 = blockHelperMissing.call(depth0, 'em-modal-footer', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[],types:[],data:data}); }
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      }
    function program5(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n<!--optional toggler to close the opened modal-->\n");
      stack1 = (helper = helpers['em-modal-toggler'] || (depth0 && depth0['em-modal-toggler']),options={hash:{
        'class': ("close")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(6, program6, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-modal-toggler", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<h4 class=\"modal-title\">login</h4>\n");
      return buffer;
      }
    function program6(depth0,data) {
      
      
      data.buffer.push("x");
      }

    function program8(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n\n");
      stack1 = helpers['if'].call(depth0, "async", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n");
      stack1 = helpers._triageMustache.call(depth0, "showRegistration", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<a ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "authenticateFacebook", "facebook-oauth2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
      data.buffer.push(">facebook</a>\n\n<a ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'href': ("twitterLoginUrl")
      },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">twitter</a>\n<form id='login-form' method='post'>\n  <div>\n    <table>\n      <tr>\n        <td>\n          <label for='login-account-name'>User&nbsp;</label>\n        </td>\n        <td>\n          ");
      data.buffer.push(escapeExpression((helper = helpers['text-field'] || (depth0 && depth0['text-field']),options={hash:{
        'value': ("loginName"),
        'placeholderKey': ("login.email_placeholder"),
        'id': ("login-account-name"),
        'autocorrect': ("off"),
        'autocapitalize': ("off"),
        'autofocus': ("autofocus")
      },hashTypes:{'value': "ID",'placeholderKey': "STRING",'id': "STRING",'autocorrect': "STRING",'autocapitalize': "STRING",'autofocus': "STRING"},hashContexts:{'value': depth0,'placeholderKey': depth0,'id': depth0,'autocorrect': depth0,'autocapitalize': depth0,'autofocus': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "text-field", options))));
      data.buffer.push("\n        </td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>\n          <label for='login-account-password'>Password&nbsp;</label>\n        </td>\n        <td>\n          ");
      data.buffer.push(escapeExpression((helper = helpers['text-field'] || (depth0 && depth0['text-field']),options={hash:{
        'value': ("loginPassword"),
        'type': ("password"),
        'id': ("login-account-password"),
        'maxlength': ("200"),
        'capsLockOn': ("capsLockOn")
      },hashTypes:{'value': "ID",'type': "STRING",'id': "STRING",'maxlength': "STRING",'capsLockOn': "ID"},hashContexts:{'value': depth0,'type': depth0,'id': depth0,'maxlength': depth0,'capsLockOn': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "text-field", options))));
      data.buffer.push(" &nbsp;\n        </td>\n        <td>\n          <a id=\"forgot-password-link\" ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "showForgotPassword", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push(">Forgot password</a>\n        </td>\n      </tr>\n      <tr>\n        <td></td>\n        <td><div ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'class': (":caps-lock-warning capsLockOn::invisible")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push("><i class=\"fa fa-exclamation-triangle\"></i> caps lock warning</div></td>\n        <td></td>\n      </tr>\n    </table>\n  </div>\n</form>\n</div>\n<div id='login-alert'>");
      stack1 = helpers._triageMustache.call(depth0, "alert", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</div>\n\n<div id='modal-alert'></div>\n\n\n\n\n");
      return buffer;
      }
    function program9(depth0,data) {
      
      
      data.buffer.push("\nSubmitting, please wait...\n");
      }

    function program11(depth0,data) {
      
      
      data.buffer.push("\n&nbsp; authenticating\n");
      }

    function program13(depth0,data) {
      
      
      data.buffer.push("\n&nbsp; <i class='fa fa-spinner fa-spin'></i>\n");
      }

    function program15(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n");
      stack1 = (helper = helpers['em-modal-toggler'] || (depth0 && depth0['em-modal-toggler']),options={hash:{
        'class': ("btn btn-default")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(16, program16, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-modal-toggler", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      }
    function program16(depth0,data) {
      
      
      data.buffer.push("Close");
      }

      stack1 = helpers['if'].call(depth0, "showRegistration", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("sonatribe-ui/templates/search", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n      <ul>\n        <li class='heading row'>\n        <b>  ");
      stack1 = helpers._triageMustache.call(depth0, "resultType.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</b>\n        </li>\n        ");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "search-result-types", {hash:{
        'type': ("resultType.type"),
        'displayType': ("resultType.displayType"),
        'content': ("resultType.results")
      },hashTypes:{'type': "ID",'displayType': "ID",'content': "ID"},hashContexts:{'type': depth0,'displayType': depth0,'content': depth0},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push("\n      </ul>\n");
      return buffer;
      }

      data.buffer.push(escapeExpression(helpers.view.call(depth0, "search-text-field", {hash:{
        'value': ("term"),
        'searchContextEnabled': ("searchContextEnabled"),
        'searchContext': ("searchContext"),
        'id': ("search-term")
      },hashTypes:{'value': "ID",'searchContextEnabled': "ID",'searchContext': "ID",'id': "STRING"},hashContexts:{'value': depth0,'searchContextEnabled': depth0,'searchContext': depth0,'id': depth0},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push("\n");
      stack1 = helpers.each.call(depth0, "resultType", "in", "content.resultTypes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("sonatribe-ui/templates/search/artist-result-type", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

    function program1(depth0,data) {
      
      
      data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
      }

      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "listing-event", "slug", options) : helperMissing.call(depth0, "link-to", "listing-event", "slug", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("sonatribe-ui/templates/search/event-result-type", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

    function program1(depth0,data) {
      
      
      data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
      }

      data.buffer.push("\n");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "event-profile", "slug", options) : helperMissing.call(depth0, "link-to", "event-profile", "slug", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("sonatribe-ui/templates/search/user-result-type", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

    function program1(depth0,data) {
      
      
      data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "slug", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
      }

      data.buffer.push(escapeExpression((helper = helpers['bound-avatar'] || (depth0 && depth0['bound-avatar']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data},helper ? helper.call(depth0, "", "medium", options) : helperMissing.call(depth0, "bound-avatar", "", "medium", options))));
      data.buffer.push("\n");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user-profile", "slug", options) : helperMissing.call(depth0, "link-to", "user-profile", "slug", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      data.buffer.push(escapeExpression(helpers.log.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
      return buffer;
      
    });
  });
define("sonatribe-ui/templates/site-map", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

    function program1(depth0,data) {
      
      
      data.buffer.push("events");
      }

      data.buffer.push("<section class=\"d-dropdown\" id=\"site-map-dropdown\">\n  <ul class=\"location-links\">\n    <li>\n      <a href=\"/latest\" title=\"latest\" class=\"latest-topics-link\">conversations</a>\n    </li>\n    <li>\n      <a href=\"/latest\" title=\"latest\" class=\"latest-topics-link\">profile</a>\n    </li>\n    <li>\n      <a href=\"/latest\" title=\"latest\" class=\"latest-topics-link\">campsites</a>\n    </li>\n    <li>\n    ");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "event-profile", options) : helperMissing.call(depth0, "link-to", "event-profile", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    </li>\n</section>\n");
      return buffer;
      
    });
  });
define("sonatribe-ui/templates/sonatribe", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1;


      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("sonatribe-ui/templates/text-field", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '';


      return buffer;
      
    });
  });
define("sonatribe-ui/templates/unauthorized", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1;


      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\nnot authorized");
      return buffer;
      
    });
  });
define("sonatribe-ui/templates/user-dropdown", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

    function program1(depth0,data) {
      
      
      data.buffer.push("profile");
      }

    function program3(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n      	<li>");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "admin", "currentUser", options) : helperMissing.call(depth0, "link-to", "admin", "currentUser", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</li>\n	  ");
      return buffer;
      }
    function program4(depth0,data) {
      
      
      data.buffer.push("admin");
      }

      data.buffer.push("<section class='d-dropdown' id='user-dropdown'>\n  <ul class='user-dropdown-links'>\n      <li>");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user-profile", "currentUser", options) : helperMissing.call(depth0, "link-to", "user-profile", "currentUser", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</li>\n      ");
      stack1 = helpers['if'].call(depth0, "isAdmin", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n      <li><a href=\"#\">messages</a></li>\n      <li><a href=\"#\">settings</a></li>\n      <li><a ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'href': ("logoutUrl")
      },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">log out</a></li>\n  </ul>\n</section>\n");
      return buffer;
      
    });
  });
define("sonatribe-ui/templates/user-profile", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, self=this;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n	<li>");
      stack1 = helpers._triageMustache.call(depth0, "friend.friendSlug", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</li>\n");
      return buffer;
      }

      data.buffer.push("\n<br><br><br><br><br>\n\ntest user profile new: <br>\n\n<div>name: ");
      stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</div>\n\n<div>bio: ");
      stack1 = helpers._triageMustache.call(depth0, "bio.content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</div>\n<ul>\n");
      stack1 = helpers.each.call(depth0, "friend", "in", "friendList.friends", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n</ul>\n");
      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("sonatribe-ui/tests/adapters/application.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - adapters');
    test('adapters/application.js should pass jshint', function() { 
      ok(true, 'adapters/application.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('app.js should pass jshint', function() { 
      ok(true, 'app.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/authenticators/torii.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - authenticators');
    test('authenticators/torii.js should pass jshint', function() { 
      ok(true, 'authenticators/torii.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/components/home-logo.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - components');
    test('components/home-logo.js should pass jshint', function() { 
      ok(true, 'components/home-logo.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/components/text-field.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - components');
    test('components/text-field.js should pass jshint', function() { 
      ok(true, 'components/text-field.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/controllers/admin.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/admin.js should pass jshint', function() { 
      ok(true, 'controllers/admin.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/controllers/application.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/application.js should pass jshint', function() { 
      ok(true, 'controllers/application.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/controllers/create-account.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/create-account.js should pass jshint', function() { 
      ok(true, 'controllers/create-account.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/controllers/event-profile.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/event-profile.js should pass jshint', function() { 
      ok(true, 'controllers/event-profile.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/controllers/event-profile/lineup-viewer.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers/event-profile');
    test('controllers/event-profile/lineup-viewer.js should pass jshint', function() { 
      ok(true, 'controllers/event-profile/lineup-viewer.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/controllers/header.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/header.js should pass jshint', function() { 
      ok(true, 'controllers/header.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/controllers/index.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/index.js should pass jshint', function() { 
      ok(true, 'controllers/index.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/controllers/lineup-viewer.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/lineup-viewer.js should pass jshint', function() { 
      ok(true, 'controllers/lineup-viewer.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/controllers/listing-event.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/listing-event.js should pass jshint', function() { 
      ok(true, 'controllers/listing-event.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/controllers/manage-account.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/manage-account.js should pass jshint', function() { 
      ok(true, 'controllers/manage-account.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/controllers/modal.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/modal.js should pass jshint', function() { 
      ok(true, 'controllers/modal.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/controllers/modal/create-account.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers/modal');
    test('controllers/modal/create-account.js should pass jshint', function() { 
      ok(true, 'controllers/modal/create-account.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/controllers/modal/login.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers/modal');
    test('controllers/modal/login.js should pass jshint', function() { 
      ok(true, 'controllers/modal/login.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/controllers/search.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/search.js should pass jshint', function() { 
      ok(true, 'controllers/search.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/controllers/sonatribe.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/sonatribe.js should pass jshint', function() { 
      ok(true, 'controllers/sonatribe.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/controllers/user-dropdown.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/user-dropdown.js should pass jshint', function() { 
      ok(true, 'controllers/user-dropdown.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/helpers/bound-avatar.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - helpers');
    test('helpers/bound-avatar.js should pass jshint', function() { 
      ok(true, 'helpers/bound-avatar.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/helpers/computed.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - helpers');
    test('helpers/computed.js should pass jshint', function() { 
      ok(true, 'helpers/computed.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/helpers/fmt.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - helpers');
    test('helpers/fmt.js should pass jshint', function() { 
      ok(true, 'helpers/fmt.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/helpers/icon-helper.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - helpers');
    test('helpers/icon-helper.js should pass jshint', function() { 
      ok(true, 'helpers/icon-helper.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/helpers/image-helper.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - helpers');
    test('helpers/image-helper.js should pass jshint', function() { 
      ok(true, 'helpers/image-helper.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/helpers/resolver", 
  ["ember/resolver","sonatribe-ui/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Resolver = __dependency1__["default"];
    var config = __dependency2__["default"];

    var resolver = Resolver.create();

    resolver.namespace = {
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix
    };

    __exports__["default"] = resolver;
  });
define("sonatribe-ui/tests/helpers/start-app", 
  ["ember","sonatribe-ui/app","sonatribe-ui/router","sonatribe-ui/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Application = __dependency2__["default"];
    var Router = __dependency3__["default"];
    var config = __dependency4__["default"];

    __exports__["default"] = function startApp(attrs) {
      var application;

      var attributes = Ember.merge({}, config.APP);
      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

      Ember.run(function () {
        application = Application.create(attributes);
        application.setupForTesting();
        application.injectTestHelpers();
      });

      return application;
    }
  });
define("sonatribe-ui/tests/initializers/initialize-container.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - initializers');
    test('initializers/initialize-container.js should pass jshint', function() { 
      ok(true, 'initializers/initialize-container.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/initializers/initialize-user.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - initializers');
    test('initializers/initialize-user.js should pass jshint', function() { 
      ok(true, 'initializers/initialize-user.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/initializers/router-reopen.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - initializers');
    test('initializers/router-reopen.js should pass jshint', function() { 
      ok(true, 'initializers/router-reopen.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/initializers/torii.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - initializers');
    test('initializers/torii.js should pass jshint', function() { 
      ok(true, 'initializers/torii.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/initializers/user-reopen-class.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - initializers');
    test('initializers/user-reopen-class.js should pass jshint', function() { 
      ok(true, 'initializers/user-reopen-class.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/initializers/view-reopen.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - initializers');
    test('initializers/view-reopen.js should pass jshint', function() { 
      ok(true, 'initializers/view-reopen.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/mixins/has-current-user.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - mixins');
    test('mixins/has-current-user.js should pass jshint', function() { 
      ok(true, 'mixins/has-current-user.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/mixins/modal-functionality.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - mixins');
    test('mixins/modal-functionality.js should pass jshint', function() { 
      ok(true, 'mixins/modal-functionality.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/mixins/presence.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - mixins');
    test('mixins/presence.js should pass jshint', function() { 
      ok(true, 'mixins/presence.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/mixins/search-lineup.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - mixins');
    test('mixins/search-lineup.js should pass jshint', function() { 
      ok(true, 'mixins/search-lineup.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/mixins/search.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - mixins');
    test('mixins/search.js should pass jshint', function() { 
      ok(true, 'mixins/search.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/mixins/singleton.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - mixins');
    test('mixins/singleton.js should pass jshint', function() { 
      ok(true, 'mixins/singleton.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/mixins/sonatribe-ajax.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - mixins');
    test('mixins/sonatribe-ajax.js should pass jshint', function() { 
      ok(true, 'mixins/sonatribe-ajax.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/mixins/sonatribe-debounce.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - mixins');
    test('mixins/sonatribe-debounce.js should pass jshint', function() { 
      ok(true, 'mixins/sonatribe-debounce.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/models/artist.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - models');
    test('models/artist.js should pass jshint', function() { 
      ok(true, 'models/artist.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/models/event-instance.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - models');
    test('models/event-instance.js should pass jshint', function() { 
      ok(true, 'models/event-instance.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/models/image.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - models');
    test('models/image.js should pass jshint', function() { 
      ok(true, 'models/image.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/models/listing-event.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - models');
    test('models/listing-event.js should pass jshint', function() { 
      ok(true, 'models/listing-event.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/models/location.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - models');
    test('models/location.js should pass jshint', function() { 
      ok(true, 'models/location.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/models/user.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - models');
    test('models/user.js should pass jshint', function() { 
      ok(true, 'models/user.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/router.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('router.js should pass jshint', function() { 
      ok(true, 'router.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/routes/admin.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/admin.js should pass jshint', function() { 
      ok(true, 'routes/admin.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/routes/application.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/application.js should pass jshint', function() { 
      ok(true, 'routes/application.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/routes/artist-profile.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/artist-profile.js should pass jshint', function() { 
      ok(true, 'routes/artist-profile.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/routes/event-profile.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/event-profile.js should pass jshint', function() { 
      ok(true, 'routes/event-profile.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/routes/event-profile/lineup-viewer.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes/event-profile');
    test('routes/event-profile/lineup-viewer.js should pass jshint', function() { 
      ok(true, 'routes/event-profile/lineup-viewer.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/routes/lineup-viewer.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/lineup-viewer.js should pass jshint', function() { 
      ok(true, 'routes/lineup-viewer.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/routes/listing-event.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/listing-event.js should pass jshint', function() { 
      ok(true, 'routes/listing-event.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/routes/manage-account.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/manage-account.js should pass jshint', function() { 
      ok(true, 'routes/manage-account.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/routes/sonatribe.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/sonatribe.js should pass jshint', function() { 
      ok(true, 'routes/sonatribe.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/routes/unauthorized.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/unauthorized.js should pass jshint', function() { 
      ok(true, 'routes/unauthorized.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/routes/user-profile.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/user-profile.js should pass jshint', function() { 
      ok(true, 'routes/user-profile.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/sonatribe-ui/tests/helpers/resolver.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - sonatribe-ui/tests/helpers');
    test('sonatribe-ui/tests/helpers/resolver.js should pass jshint', function() { 
      ok(true, 'sonatribe-ui/tests/helpers/resolver.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/sonatribe-ui/tests/helpers/start-app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - sonatribe-ui/tests/helpers');
    test('sonatribe-ui/tests/helpers/start-app.js should pass jshint', function() { 
      ok(true, 'sonatribe-ui/tests/helpers/start-app.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/sonatribe-ui/tests/test-helper.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - sonatribe-ui/tests');
    test('sonatribe-ui/tests/test-helper.js should pass jshint', function() { 
      ok(true, 'sonatribe-ui/tests/test-helper.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/sonatribe-ui/tests/unit/controllers/manage-account-test.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - sonatribe-ui/tests/unit/controllers');
    test('sonatribe-ui/tests/unit/controllers/manage-account-test.js should pass jshint', function() { 
      ok(true, 'sonatribe-ui/tests/unit/controllers/manage-account-test.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/sonatribe-ui/tests/unit/controllers/modal/create-account-test.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - sonatribe-ui/tests/unit/controllers/modal');
    test('sonatribe-ui/tests/unit/controllers/modal/create-account-test.js should pass jshint', function() { 
      ok(true, 'sonatribe-ui/tests/unit/controllers/modal/create-account-test.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/sonatribe-ui/tests/unit/controllers/modal/login-test.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - sonatribe-ui/tests/unit/controllers/modal');
    test('sonatribe-ui/tests/unit/controllers/modal/login-test.js should pass jshint', function() { 
      ok(true, 'sonatribe-ui/tests/unit/controllers/modal/login-test.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/sonatribe-ui/tests/unit/routes/manage-account-test.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - sonatribe-ui/tests/unit/routes');
    test('sonatribe-ui/tests/unit/routes/manage-account-test.js should pass jshint', function() { 
      ok(true, 'sonatribe-ui/tests/unit/routes/manage-account-test.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/test-helper", 
  ["sonatribe-ui/tests/helpers/resolver","ember-qunit"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var resolver = __dependency1__["default"];
    var setResolver = __dependency2__.setResolver;

    setResolver(resolver);

    document.write("<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>");

    QUnit.config.urlConfig.push({ id: "nocontainer", label: "Hide container" });
    var containerVisibility = QUnit.urlParams.nocontainer ? "hidden" : "visible";
    document.getElementById("ember-testing-container").style.visibility = containerVisibility;
  });
define("sonatribe-ui/tests/unit/controllers/manage-account-test", 
  ["ember-qunit"],
  function(__dependency1__) {
    "use strict";
    var moduleFor = __dependency1__.moduleFor;
    var test = __dependency1__.test;

    moduleFor("controller:manage-account", "ManageAccountController", {});

    // Replace this with your real tests.
    test("it exists", function () {
      var controller = this.subject();
      ok(controller);
    });
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });
define("sonatribe-ui/tests/unit/controllers/modal/create-account-test", 
  ["ember-qunit"],
  function(__dependency1__) {
    "use strict";
    var moduleFor = __dependency1__.moduleFor;
    var test = __dependency1__.test;

    moduleFor("controller:modal/create-account", "ModalCreateAccountController", {});

    // Replace this with your real tests.
    test("it exists", function () {
      var controller = this.subject();
      ok(controller);
    });
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });
define("sonatribe-ui/tests/unit/controllers/modal/login-test", 
  ["ember-qunit"],
  function(__dependency1__) {
    "use strict";
    var moduleFor = __dependency1__.moduleFor;
    var test = __dependency1__.test;

    moduleFor("controller:modal/login", "ModalLoginController", {});

    // Replace this with your real tests.
    test("it exists", function () {
      var controller = this.subject();
      ok(controller);
    });
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });
define("sonatribe-ui/tests/unit/routes/manage-account-test", 
  ["ember-qunit"],
  function(__dependency1__) {
    "use strict";
    var moduleFor = __dependency1__.moduleFor;
    var test = __dependency1__.test;

    moduleFor("route:manage-account", "ManageAccountRoute", {});

    test("it exists", function () {
      var route = this.subject();
      ok(route);
    });
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });
define("sonatribe-ui/tests/views/grouped-view.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - views');
    test('views/grouped-view.js should pass jshint', function() { 
      ok(true, 'views/grouped-view.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/views/header.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - views');
    test('views/header.js should pass jshint', function() { 
      ok(true, 'views/header.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/views/hide-modal.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - views');
    test('views/hide-modal.js should pass jshint', function() { 
      ok(true, 'views/hide-modal.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/views/index.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - views');
    test('views/index.js should pass jshint', function() { 
      ok(true, 'views/index.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/views/search-result-types.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - views');
    test('views/search-result-types.js should pass jshint', function() { 
      ok(true, 'views/search-result-types.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/views/search-text-field.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - views');
    test('views/search-text-field.js should pass jshint', function() { 
      ok(true, 'views/search-text-field.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/views/search.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - views');
    test('views/search.js should pass jshint', function() { 
      ok(true, 'views/search.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/tests/views/view.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - views');
    test('views/view.js should pass jshint', function() { 
      ok(true, 'views/view.js should pass jshint.'); 
    });
  });
define("sonatribe-ui/views/grouped-view", 
  ["ember","sonatribe-ui/mixins/presence","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Presence = __dependency2__["default"];

    __exports__["default"] = Ember.View.extend(Presence, {
      init: function () {
        this._super();
        this.set("context", this.get("content"));

        var templateData = this.get("templateData");
        if (templateData) {
          this.set("templateData.insideGroup", true);
        }
      }
    });
  });
define("sonatribe-ui/views/header", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    var originalZIndex;

    __exports__["default"] = Ember.View.extend({
      tagName: "header",
      classNames: ["d-header", "clearfix"],
      classNameBindings: ["editingTopic"],
      templateName: "header",

      showDropdown: function ($target) {
        var elementId = $target.data("dropdown") || $target.data("notifications"),
            $dropdown = Ember.$("#" + elementId),
            $li = $target.closest("li"),
            $ul = $target.closest("ul"),
            $html = Ember.$("html"),
            $header = Ember.$("header"),
            replyZIndex = parseInt(Ember.$("#reply-control").css("z-index"), 10),
            self = this;

        originalZIndex = originalZIndex || Ember.$("header").css("z-index");

        if (replyZIndex > 0) {
          $header.css("z-index", replyZIndex + 1);
        }

        var controller = self.get("controller");
        if (controller && !controller.isDestroyed) {
          controller.set("visibleDropdown", elementId);
        }
        // we need to ensure we are rendered,
        //  this optimises the speed of the initial render
        var render = $target.data("render");
        if (render) {
          if (!this.get(render)) {
            this.set(render, true);
            Ember.run.next(this, function () {
              this.showDropdown.apply(self, [$target]);
            });
            return;
          }
        }

        var hideDropdown = function () {
          $header.css("z-index", originalZIndex);
          $dropdown.fadeOut("fast");
          $li.removeClass("active");
          $html.data("hide-dropdown", null);
          var controller = self.get("controller");
          if (controller && !controller.isDestroyed) {
            controller.set("visibleDropdown", null);
          }
          return $html.off("click.d-dropdown");
        };

        // if a dropdown is active and the user clicks on it, close it
        if ($li.hasClass("active")) {
          return hideDropdown();
        }
        // otherwhise, mark it as active
        $li.addClass("active");
        // hide the other dropdowns
        Ember.$("li", $ul).not($li).removeClass("active");
        Ember.$(".d-dropdown").not($dropdown).fadeOut("fast");
        // fade it fast
        $dropdown.fadeIn("fast");
        // autofocus any text input field
        $dropdown.find("input[type=text]").focus().select();

        $html.on("click.d-dropdown", function (e) {
          return Ember.$(e.target).closest(".d-dropdown").length > 0 ? true : hideDropdown.apply(self);
        });

        $html.data("hide-dropdown", hideDropdown);

        return false;
      },

      examineDockHeader: function () {
        var headerView = this;

        // Check the dock after the current run loop. While rendering,
        // it's much slower to calculate `outlet.offset()`
        Ember.run.next(function () {
          if (!headerView.docAt) {
            var outlet = Ember.$("#main-outlet");
            if (!(outlet && outlet.length === 1)) {
              return;
            }
            headerView.docAt = outlet.offset().top;
          }

          var offset = window.pageYOffset || Ember.$("html").scrollTop();
          if (offset >= headerView.docAt) {
            if (!headerView.dockedHeader) {
              Ember.$("body").addClass("docked");
              headerView.dockedHeader = true;
            }
          } else {
            if (headerView.dockedHeader) {
              Ember.$("body").removeClass("docked");
              headerView.dockedHeader = false;
            }
          }
        });
      },

      didInsertElement: function () {
        var self = this;

        this.$("a[data-dropdown]").on("click.dropdown", function (e) {
          self.showDropdown.apply(self, [Ember.$(e.currentTarget)]);
          return false;
        });
        this.$().on("click.notifications", "a.unread-private-messages, a.unread-notifications, a[data-notifications]", function (e) {
          self.showNotifications(e);
          return false;
        });
        Ember.$(window).bind("scroll.discourse-dock", function () {
          self.examineDockHeader();
        });
        Ember.$(document).bind("touchmove.discourse-dock", function () {
          self.examineDockHeader();
        });
        self.examineDockHeader();

        // Delegate ESC to the composer
        Ember.$("body").on("keydown.header", function (e) {
          // Hide dropdowns
          if (e.which === 27) {
            self.Ember.$("li").removeClass("active");
            self.Ember.$(".d-dropdown").fadeOut("fast");
          }
          if (self.get("editingTopic")) {
            if (e.which === 13) {
              self.finishedEdit();
            }
            if (e.which === 27) {
              return self.cancelEdit();
            }
          }
        });
      }
    });
  });
define("sonatribe-ui/views/hide-modal", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.View.extend({
      // No rendering!
      render: Ember.K,

      _hideModal: (function () {
        Ember.$("#discourse-modal").modal("hide");
      }).on("didInsertElement")
    });
  });
define("sonatribe-ui/views/index", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.View.extend({});
  });
define("sonatribe-ui/views/search-result-types", 
  ["ember","sonatribe-ui/views/grouped-view","sonatribe-ui/helpers/fmt","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var GroupedView = __dependency2__["default"];
    var Fmt = __dependency3__["default"];

    __exports__["default"] = Ember.CollectionView.extend({
      tagName: "ul",
      itemViewClass: GroupedView.extend({
        tagName: "li",
        classNameBindings: ["selected"],
        templateName: new Fmt("parentView.displayType", "search/%@-result-type")
      }),

      didInsertElement: function () {}
    });
    //var term = this.get('controller.term');
    /*if(!_.isEmpty(term)) {
      this.$('.blurb').highlight(term.split(/\s+/), {className: 'search-highlight'});
      this.$('.topic-title').highlight(term.split(/\s+/), {className: 'search-highlight'} );
    }*/
  });
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
define("sonatribe-ui/views/search", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.View.extend({
      tagName: "div",
      classNames: ["d-dropdown"],
      elementId: "search-dropdown",
      templateName: "search"
    });
  });
define("sonatribe-ui/views/view", 
  ["ember","sonatribe-ui/mixins/presence","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Presence = __dependency2__["default"];

    __exports__["default"] = Ember.View.extend(Presence, {});
  });
/* jshint ignore:start */

define('sonatribe-ui/config/environment', ['ember'], function(Ember) {
  var prefix = 'sonatribe-ui';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("sonatribe-ui/tests/test-helper");
} else {
  require("sonatribe-ui/app")["default"].create({});
}

/* jshint ignore:end */
//# sourceMappingURL=sonatribe-ui.map