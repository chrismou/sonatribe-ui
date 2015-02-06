import Ember from 'ember';
import SonatribeRoute from 'sonatribe-ui/routes/sonatribe';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
//import User from 'sonatribe-ui/models/user';
import HasCurrentUser from 'sonatribe-ui/mixins/has-current-user';

var ApplicationRoute = SonatribeRoute.extend(ApplicationRouteMixin, HasCurrentUser, {
	 actions: {
		// action to trigger authentication with Torii

		authenticateFacebook: function(){
			return this.get('session').authenticate('authenticator:custom', 'facebook-connect')
			.then(function(a, b){
				
				if(_this.get('session').content.user.username === undefined){
					_this.transitionTo('manage-account');
				}
				return true;
			});
		}
	}
});

Ember.RSVP.EventTarget.mixin(ApplicationRoute);
export default ApplicationRoute;
