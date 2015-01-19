define("sonatribe-ui/adapters/application", 
  ["ember-data","ember","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];
    var Ember = __dependency2__["default"];

    __exports__["default"] = DS.RESTAdapter.extend({
      host: Sonatribe.SiteSettings.api_url,
      updateRecord: function (store, type, record) {
        var data = {};
        var get = Ember.get;
        var serializer = store.serializerFor(type.typeKey);

        serializer.serializeIntoHash(data, type, record, { includeId: true });

        var id = get(record, "id");

        return this.ajax(this.buildURL(type.typeKey, id, record), "PUT", { data: data });
      } });
  });