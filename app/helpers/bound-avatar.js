var safe = Handlebars.SafeString;

import Ember from 'ember';

function boundAvatar(user) {
  if (user != null && user.get('profilePictureUrl') != null) {
  	return new safe('<img width="32" src="' + user.get('profilePictureUrl') + '" />');
  }
  else{
  	return new safe('<img src="/img/avatar40x40.jpg" width="32" />');
  }
}

export {
  boundAvatar
};

export default Ember.Handlebars.makeBoundHelper(boundAvatar);
