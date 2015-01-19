import Ember from 'ember';
import SonatribeRoute from 'sonatribe-ui/routes/sonatribe';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import User from 'sonatribe-ui/models/user';
import HasCurrentUser from 'sonatribe-ui/mixins/has-current-user';

var ApplicationRoute = SonatribeRoute.extend(ApplicationRouteMixin, HasCurrentUser, {
	 actions: {
			// action to trigger authentication with Torii
			authenticateFacebook: function(provider){

				var rte = this;

				this.get('session')
					.authenticate('simple-auth-authenticator:torii', 'facebook-connect')
					.then(function(){

						var accessToken = rte.get('session').get('content').accessToken;

						//TODO: replace this with a model save
						Ember.$.ajax({
							url: Sonatribe.SiteSettings.api_url + '/auths/facebook_access_token?code=' + accessToken,
							dataType: 'json',
							success: function(authResponse){
								console.log(authResponse);
								var user = rte.store.find('user', { id: authResponse.auth.user });

								rte.set('currentUser', user);

								if(user.get('username') === undefined){

									rte.transitionTo('manageAccount');
								}
							},
							error: function(err){
								console.log(err);
							}
						});

					});

					return false;
			}
	}
});

Ember.RSVP.EventTarget.mixin(ApplicationRoute);
export default ApplicationRoute;
