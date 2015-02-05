import DS from 'ember-data';
import Ember from 'ember';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
	host: config.sonatribe.apiUrl,
	updateRecord: function(store, type, record) {
	    var data = {};
	    var get = Ember.get;
	    var serializer = store.serializerFor(type.typeKey);

	    serializer.serializeIntoHash(data, type, record, { includeId: true });

	    var id = get(record, 'id');

	    return this.ajax(this.buildURL(type.typeKey, id, record), 'PUT', { data: data });
  },
});
