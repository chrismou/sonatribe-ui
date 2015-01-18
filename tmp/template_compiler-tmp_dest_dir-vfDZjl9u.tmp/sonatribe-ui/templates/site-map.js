import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("events");
  }

  data.buffer.push("<section class=\"d-dropdown\" id=\"site-map-dropdown\">\n  <ul class=\"location-links\">\n    <li>\n      <a href=\"/latest\" title=\"latest\" class=\"latest-topics-link\">conversations</a>\n    </li>\n    <li>\n      <a href=\"/latest\" title=\"latest\" class=\"latest-topics-link\">profile</a>\n    </li>\n    <li>\n      <a href=\"/latest\" title=\"latest\" class=\"latest-topics-link\">campsites</a>\n    </li>\n    <li>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "event-profile", options) : helperMissing.call(depth0, "link-to", "event-profile", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </li>\n</section>\n");
  return buffer;
  
});
