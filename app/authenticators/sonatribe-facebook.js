import Authenticator from 'simple-auth-torii/authenticators/torii';
import config from '../config/environment';
import session from 'sonatribe-ui/session/custom-session';

export default Authenticator.extend({
  needs: ['store'],
  restore: function(data) {
    console.log(data);
    var _this = this;
    data      = data || {};
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(data.provider)) {
        var provider = data.provider;
        _this.torii.fetch(data.provider, data).then(function(data) {
          console.log(data);
          _this.resolveWith(provider, data, resolve);
        }, function() {
          delete _this.provider;
          reject();
        });
      } else {
        delete _this.provider;
        reject();
      }
    });
  },
  authenticate: function(provider, options) {

    var orig = this;
    console.log(config);

    return new Ember.RSVP.Promise(function(resolve, reject) {
      return orig._super(provider, options)
      .then(function(authResponse){

        console.log(authResponse);

        var accessToken = accessToken;

        Ember.$.ajax({
          url: config.sonatribe.api_url + '/auths/facebook_access_token?code=' + accessToken,
          dataType: 'json',
          success: function(stAuthResponse){
            console.log(stAuthResponse);
            Ember.run(function() {
              var store = orig.store;

              store.find('user', stAuthResponse.id).then(function(user){


                        authResponse.user_id = stAuthResponse.id;
                        authResponse.user = user;

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
    return new Ember.RSVP.Promise(function(resolve, reject) {
      return orig._super(data)
    });
  }
});
