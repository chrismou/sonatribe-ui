import Ember from 'ember';
import config from '../config/environment';


export function imageHelper(url, size) {
 	var html = '<img src="' + url.replace('upload/', 'upload/' + size + '/') + '"  />';
 	return new Handlebars.SafeString(html);
}

export default Ember.Handlebars.makeBoundHelper(imageHelper);
