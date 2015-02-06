import DS from 'ember-data';

export default DS.Model.extend({
  	slug: DS.attr('string'),
  	name:DS.attr('string'),
  	images: DS.hasMany('image', { async:true }),
    listingEventsPlayedAt: DS.hasMany('listingevent', { async:true }),
    genres: DS.attr()
});
