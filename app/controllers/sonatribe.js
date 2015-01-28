import Ember from 'ember';
import HasCurrentUser from 'sonatribe-ui/mixins/has-current-user';


export default Ember.Controller.extend(HasCurrentUser, {
	apiUrl:  Sonatribe.SiteSettings.apiUrl,
	appUrl:  Sonatribe.SiteSettings.appUrl,
	isAdmin: function(){
		var found = false;
		
		if (this.get('currentUser.Roles') &&  this.get('currentUser.Roles').indexOf('Admin') > -1) {
		    found = true;
		}
		
      return found;
	}.property(),
	logoutUrl: Sonatribe.SiteSettings.apiUrl + 'auth/logout/?continue=' + Sonatribe.SiteSettings.appUrl,
	facebookLoginUrl: Sonatribe.SiteSettings.apiUrl  + 'auth/facebook/?continue=' + Sonatribe.SiteSettings.appUrl,
	twitterLoginUrl: Sonatribe.SiteSettings.apiUrl  + 'auth/twitter/?continue=' + Sonatribe.SiteSettings.appUrl,
	imageFormatUrl: Sonatribe.SiteSettings.apiUrl  + 'image/'
});
