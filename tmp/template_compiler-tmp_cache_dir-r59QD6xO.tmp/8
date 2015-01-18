import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n	");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "linup-list", "model", options) : helperMissing.call(depth0, "render", "linup-list", "model", options))));
  data.buffer.push("\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n	");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "linup-grid", "model", options) : helperMissing.call(depth0, "render", "linup-grid", "model", options))));
  data.buffer.push("\n");
  return buffer;
  }

  data.buffer.push("<button id=\"clear-completed\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextPage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    Toggle View\n</button>\n<button id=\"clear-completed\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleAttendance", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    test\n</button>\n\n");
  data.buffer.push(escapeExpression(helpers.log.call(depth0, "model", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "search-text-field", {hash:{
    'value': ("term"),
    'searchContextEnabled': ("searchContextEnabled"),
    'searchContext': ("searchContext"),
    'id': ("lineup-search-term")
  },hashTypes:{'value': "ID",'searchContextEnabled': "ID",'searchContext': "ID",'id': "STRING"},hashContexts:{'value': depth0,'searchContextEnabled': depth0,'searchContext': depth0,'id': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "renderList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "renderGrid", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});
