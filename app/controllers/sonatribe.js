import Ember from 'ember';
import HasCurrentUser from 'sonatribe-ui/mixins/has-current-user';
import config from '../config/environment';


export default Ember.Controller.extend(HasCurrentUser, {
	api_url:  config.sonatribe.api_url,
	app_url:  config.sonatribe.app_url,
	isAdmin: function(){
		var found = false;

		if (this.get('currentUser.Roles') &&  this.get('currentUser.Roles').indexOf("Admin") > -1) {
		    found = true;
		}

      return found;
	}.property(),
	log_out_link: config.sonatribe.api_url + 'auth/logout/?continue=' + config.sonatribe.app_url,
	facebook_login_url: config.sonatribe.api_url  + 'auth/facebook/?continue=' + config.sonatribe.app_url,
	twitter_login_url: config.sonatribe.api_url  + 'auth/twitter/?continue=' + config.sonatribe.app_url,
	image_format_url: config.sonatribe.api_url  + 'image/'
});
