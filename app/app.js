import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);


window.Sonatribe = {};
Sonatribe.SiteSettings = {
  'apiUrl': 'https://sonatribe-api.herokuapp.com',
  'appUrl': 'http://dev.festivaltribe.co.uk:4200',

  'title': 'Sonatribe',
  'logo_url': 'http://alpha.sonatribe.com/img/logo_simple_small.jpg',
  'logo_small_url': 'http://alpha.sonatribe.com/img/logo_simple_small.jpg',
  'mobile_logo_url': '',
};

export default App;
