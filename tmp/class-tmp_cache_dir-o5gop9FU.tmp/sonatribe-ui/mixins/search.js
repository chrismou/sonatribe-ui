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