import Ember from 'ember';
import SonatribeRoute from 'sonatribe-ui/routes/sonatribe';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import User from 'sonatribe-ui/models/user';
import HasCurrentUser from 'sonatribe-ui/mixins/has-current-user';

var ApplicationRoute = SonatribeRoute.extend(ApplicationRouteMixin, HasCurrentUser, {
	 actions: {
			// action to trigger authentication with Torii

			authenticateFacebook: function(provider){
				return this.get('session')
					.authenticate('authenticator:custom', 'facebook-connect');
					.then(function(){

						var accessToken = rte.get('session').get('content').accessToken;

						//TODO: replace this with a model save
						Ember.$.ajax({
							url: Sonatribe.SiteSettings.apiUrl + '/auths/facebook_access_token?code=' + accessToken,
							dataType: 'json',
							success: function(authResponse){
								console.log(authResponse);

								rte.store.find('user', authResponse.id).then(function(user){

									User.resetCurrent(user);

									if(user.get('username') === undefined || user.get('username') == null){

										FB.api(
											'/me/picture',
										{
											'redirect': true,
											'height': '101',
											'type': 'normal',
											'width': '101'
										},
										function (response) {
											if (response && !response.error) {
												user.set('profilePictureUrl', response.data.url);
												user.save();
												User.resetCurrent(user);
												rte.currentUser = user;

												//TODO: need to merge our user with the simple-auth session
												// so we can rebuild the UI later on refresh etc

												rte.transitionTo('manageAccount');
											}
										}
									);


								}
								});


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
