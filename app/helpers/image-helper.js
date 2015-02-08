import Ember from 'ember';
//import config from '../config/environment';


export function imageHelper(url, size) {
  var html;
  if (url !== null && url !== undefined) {
    html = '<img src="' + url.replace('upload/', 'upload/' + size + '/') + '"  />';
    return new Handlebars.SafeString(html);
  }

  html = '<img src="/img/avatar40x40.jpg" />';
  return new Handlebars.SafeString(html);
}

export default Ember.Handlebars.makeBoundHelper(imageHelper);
