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