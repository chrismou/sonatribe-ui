import Ember from 'ember';
import config from '../config/environment';


export function imageHelper(img, size) {
 	var html = '<img src="' + img.url + '"  />';
 	return new Handlebars.SafeString(html);
}

export default Ember.Handlebars.makeBoundHelper(imageHelper);
