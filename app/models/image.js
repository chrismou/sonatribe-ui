import DS from 'ember-data';

export default DS.Model.extend({
	name:DS.attr('string'),
  	artist: DS.belongsTo('artist'),
		width: DS.attr('string'),
		height: DS.attr('string'),
		format: DS.attr('string'),
		url: DS.attr('string'),
		secureUrl: DS.attr('string')
});
