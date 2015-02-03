import Ember from 'ember';
import HasCurrentUser from 'sonatribe-ui/mixins/has-current-user';
import config from '../config/environment';


export default Ember.Controller.extend(HasCurrentUser, {
	apiUrl:  config.sonatribe.apiUrl,
	appUrl:  config.sonatribe.appUrl,
	isAdmin: function(){
		var found = false;

		if (this.get('currentUser.Roles') &&  this.get('currentUser.Roles').indexOf('Admin') > -1) {
		    found = true;
		}

      return found;
	}.property(),
	logoutLink: config.sonatribe.apiUrl + 'auth/logout/?continue=' + config.sonatribe.appUrl,
	facebookLoginUrl: config.sonatribe.apiUrl  + 'auth/facebook/?continue=' + config.sonatribe.appUrl,
	twitterLoginUrl: config.sonatribe.apiUrl  + 'auth/twitter/?continue=' + config.sonatribe.appUrl,
	imageFormatUrl: config.sonatribe.apiUrl  + 'image/'
});
