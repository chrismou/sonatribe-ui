import Ember from 'ember';
//import config from '../config/environment';


export function imageHelper(url, size) {
 if (url !== null && url !== undefined) {
   var html = '<img src="' + url.replace('upload/', 'upload/' + size + '/') + '"  />';
   return new Handlebars.SafeString(html);
 }

 var html = '<img src="/assets/images/temp.png"  />';
 return new Handlebars.SafeString(html);
}

export default Ember.Handlebars.makeBoundHelper(imageHelper);
