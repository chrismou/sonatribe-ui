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