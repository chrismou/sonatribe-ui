export var initialize = function () {};

export default {
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