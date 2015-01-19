import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n       \n        <li class='heading row'>\n        <b>users attending: ");
  stack1 = helpers._triageMustache.call(depth0, "le.usersAttending.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <b>  ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "listing-event", "le.slug", options) : helperMissing.call(depth0, "link-to", "listing-event", "le.slug", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "le.start", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "le.end", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</b>\n        <div> locationId: ");
  stack1 = helpers._triageMustache.call(depth0, "le.locationName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n        ");
  stack1 = helpers['if'].call(depth0, "le.currentUserAttending", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        </li>\n     \n");
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "le.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <button id=\"clear-completed\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleAttendance", "le", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n            don't go ");
  stack1 = helpers._triageMustache.call(depth0, "le.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </button>\n        ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <button id=\"clear-completed\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleAttendance", "le", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n            lets go ");
  stack1 = helpers._triageMustache.call(depth0, "le.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </button>\n        ");
  return buffer;
  }

  data.buffer.push("grid\n\n<style>\nul.block-grid-3 {\n   display: block;\n   overflow: hidden;\n   padding: 0;\n   -webkit-box-sizing: border-box;\n   -moz-box-sizing: border-box;\n   box-sizing: border-box;\n}\nul.block-grid-3 > li {\n   width: 33.33333%;\n   float: left;\n   padding: 0 12px 12px;\n   display: block;\n   height: auto;\n   -webkit-box-sizing: border-box;\n   -moz-box-sizing: border-box;\n   box-sizing: border-box;\n}\nul.block-grid-3 > li:nth-of-type(3n+1) {\n   clear: left;\n}\n</style>\n\n <ul class=\"row-fluid block-grid-3\">\n");
  stack1 = helpers.each.call(depth0, "le", "in", "", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n </ul>");
  return buffer;
  
});
