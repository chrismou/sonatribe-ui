var safe = Handlebars.SafeString;

import Ember from 'ember';

function boundAvatar(user) {
  if (user != null && user.profilePictureUrl != null) {
  	return new safe('<img src="' + user.profilePictureUrl + '" />');
  }else if(user.profilePictureUrl != null){
	return new safe('<img src="' + user.profilePictureUrl + '" />');
  }
  else{
	return new safe('<img src="http://conversations.sonatribe.com/user_avatar/conversations.sonatribe.com/thestumonkey/25/13.png" />');
  }
}

export {
  boundAvatar
};

export default Ember.Handlebars.makeBoundHelper(boundAvatar);
