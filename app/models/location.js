import DS from 'ember-data';

export default DS.Model.extend({
	slug: DS.attr('string'),
	name:DS.attr('string'),
  	eventInstance: DS.belongsTo('eventinstance', {async:true}),
  	listingEvents: DS.hasMany('listingevent', {async:true})
});
