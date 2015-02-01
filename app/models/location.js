import DS from 'ember-data';

export default DS.Model.extend({
	slug: DS.attr('string'),
	name:DS.attr('string'),

  	eventinstance: DS.belongsTo('eventinstance'),
  	listingEvents: DS.hasMany('listingevent', {async:true})
});
