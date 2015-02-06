import Authenticator from 'sonatribe-ui/authenticators/sonatribe-facebook';

export default {
  name:   'st-simple-auth-torii',
  before: 'simple-auth',
  after:  'torii',
  initialize: function(container) {
    var torii         = container.lookup('torii:main');
    var store = container.lookup('store:main');
    var authenticator = Authenticator.create({ torii: torii, store: store });
    container.register('authenticator:custom', authenticator, { instantiate: false });
  }
};
