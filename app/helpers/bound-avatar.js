var safe = Handlebars.SafeString;

import Ember from 'ember';

function boundAvatar(user) {
  if (user != null && user.get('profilePictureUrl') != null) {
  	return new safe('<img src="' + user.get('profilePictureUrl') + '" />');
  }else if(user.get('profilePictureUrl') != null){
	return new safe('<img src="' + user.get('profilePictureUrl') + '" />');
  }
  else{
	return new safe('<img src="http://conversations.sonatribe.com/user_avatar/conversations.sonatribe.com/thestumonkey/25/13.png" />');
}
}

export {
  boundAvatar
};

export default Ember.Handlebars.makeBoundHelper(boundAvatar);
