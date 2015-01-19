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