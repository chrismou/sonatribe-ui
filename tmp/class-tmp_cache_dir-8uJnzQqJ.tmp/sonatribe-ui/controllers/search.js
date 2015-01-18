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