import customAuth from 'sonatribe-ui/authenticators/sonatribe-facebook';
import customSession from 'sonatribe-ui/session/custom-session';

export var initialize = function(container) {
 container.register('authenticator:custom', customAuth);
 container.register('session:custom', customSession);
};

export default {
  name: 'initialize-container',
  after: 'injectStore',
  initialize: initialize
};
