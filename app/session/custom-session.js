import Session from 'simple-auth/session';

var session = Session.extend({
  account: function() {
    var accountId = this.get('user_id');
    if (!Ember.isEmpty(accountId)) {
      var store = this.container.lookup('store:main');
      return store.find('user', accountId);
        /*.then(function(user){
          alert(user);
          var picurl = user.get('profilePictureUrl');
          return user;
        }, function(error){
          alert(error);
        });*/

    }
  }.property('user_id')
});

export default session;
