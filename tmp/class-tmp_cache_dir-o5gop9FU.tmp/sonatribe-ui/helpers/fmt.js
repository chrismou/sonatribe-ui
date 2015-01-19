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