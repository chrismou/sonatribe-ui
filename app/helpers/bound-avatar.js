var safe = Handlebars.SafeString;

import Ember from 'ember';

function boundAvatar(user) {
  if (user != null && user.get('profilePictureUrl') != null) {
  	return new safe('<img width="32" src="' + user.get('profilePictureUrl') + '" />');
  }
  else{
  	return new safe('<img src="http://virtual-host-discourse.global.ssl.fastly.net/user_avatar/discuss.emberjs.com/wayne_douglas/32/9568.png" />');
  }
}

export {
  boundAvatar
};

export default Ember.Handlebars.makeBoundHelper(boundAvatar);
