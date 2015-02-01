import Ember from 'ember';
import config from '../config/environment';

function computed() {
	return Ember.computed(function() {
      return config.sonatribe.name;
    }).property();
}

export {
  computed
};

export default Ember.Handlebars.makeBoundHelper(computed);
