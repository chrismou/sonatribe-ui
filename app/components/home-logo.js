import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  classNames: ["title"],
  bigLogoUrl: config.sonatribe.logo_url,
  title:  config.sonatribe.title,
  linkUrl: function() {
    return '';
  }.property(),

  showSmallLogo: function() {
    return false;
  }.property("minimized"),

  showMobileLogo: function() {
    return false;
  }.property(),

});
