import Ember from 'ember';
import HasCurrentUser from 'sonatribe-ui/mixins/has-current-user';

export default Ember.Route.extend(HasCurrentUser, {
	model: function () {
		//this.set('currentUser', this.currentUser);
	},
	access: [ 'Admin'],
	setupController: function (controller) {
		this.set('currentUser', this.currentUser);
		this.store.find('eventinstance').then(function(result){
			controller.set('model', result);
		});
	},
    beforeModel: function () {

		var found = false;

		for (var i = 0; i < this.get('access').length; i++) {
		    if (this.get('currentUser.Roles').indexOf(this.get('access')[i]) > -1) {
		        found = true;
		        break;
		    }
		}

        if (found) {
            return true;
        }

        // manage the unauthorized attempt
        this.transitionTo('unauthorized'); // or whatever
    }
});
