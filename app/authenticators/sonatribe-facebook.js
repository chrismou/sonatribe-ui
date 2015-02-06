import Authenticator from 'simple-auth-torii/authenticators/torii';
import config from '../config/environment';
//import session from 'sonatribe-ui/session/custom-session';

export default Authenticator.extend({
  needs: ['store'],
  restore: function(data) {
    var _data = data;
    var orig = this;
    return new Ember.RSVP.Promise(function(resolve) {
      return orig._super(data).then(function(data){
        Ember.merge(data, _data);
        resolve(data);
      });
    });
  },
  authenticate: function(provider, options) {

    var orig = this;

    return new Ember.RSVP.Promise(function(resolve) {
      return orig._super(provider, options)
      .then(function(authResponse){

        var accessToken = authResponse.accessToken;
        Ember.$.ajax({
          url: config.sonatribe.apiUrl + '/auths/facebook_access_token?code=' + accessToken,
          dataType: 'json',
          success: function(stAuthResponse){

            Ember.run(function() {
              var store = orig.store;
              store.find('user', stAuthResponse.id).then(function(user){
                authResponse.user = user;
                Ember.merge(authResponse, stAuthResponse);
                orig.resolveWith(provider, authResponse, resolve);
              });
            });

          }
        });

      });
    });
  },
  invalidate: function(data) {
    var orig = this;
    return new Ember.RSVP.Promise(function() {
      return orig._super(data);
    });
  }
});
