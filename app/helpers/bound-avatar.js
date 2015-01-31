var safe = Handlebars.SafeString;

import Ember from 'ember';

function boundAvatar(user) {
<<<<<<< HEAD
  if (user != null && user.profilePictureUrl != null) {
  	return new safe('<img src="' + user.profilePictureUrl + '" />');
  }else if(user.profilePictureUrl != null){
	return new safe('<img src="' + user.profilePictureUrl + '" />');
=======
  if (user != null && user.image != null) {
  	return new safe('<img src="' +  Sonatribe.SiteSettings.apiUrl  + 'image/' + user.image.name + '?size=avatarsquare" />');
  }else if(user.image != null){
	return new safe('<img src="' +  Sonatribe.SiteSettings.apiUrl  + 'image/' + user.image.name + '?size=avatarsquare" />');
>>>>>>> a0889be7d5de3d7e7c570b6337cf52c9d9bcae9c
  }
  else{
	return new safe('<img src="http://conversations.sonatribe.com/user_avatar/conversations.sonatribe.com/thestumonkey/25/13.png" />');
  }
}

export {
  boundAvatar
};

export default Ember.Handlebars.makeBoundHelper(boundAvatar);
