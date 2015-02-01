import Ember from 'ember';

export default Ember.Route.extend({
	needs: 'event-profile',
	model: function(){
		var parentmodel = this.modelFor('eventProfile');
		return this.store.find('listingevent', { eventinstanceSlug: parentmodel.slug });
  },
  actions: {
  	toggleAttendance: function  (m){

  		var id = m.get('id');
  		var toggle = !m.get('currentUserAttending');

  		this.store.find('listingevent', id).then(function(model){
  			model.set('currentUserAttending', toggle);
        model.save();
  		});
  	}
 	}
});
