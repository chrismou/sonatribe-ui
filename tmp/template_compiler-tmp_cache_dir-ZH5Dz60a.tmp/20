import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <ul>\n        <li class='heading row'>\n        <b>  ");
  stack1 = helpers._triageMustache.call(depth0, "resultType.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</b>\n        </li>\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "search-result-types", {hash:{
    'type': ("resultType.type"),
    'displayType': ("resultType.displayType"),
    'content': ("resultType.results")
  },hashTypes:{'type': "ID",'displayType': "ID",'content': "ID"},hashContexts:{'type': depth0,'displayType': depth0,'content': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\n      </ul>\n");
  return buffer;
  }

  data.buffer.push(escapeExpression(helpers.view.call(depth0, "search-text-field", {hash:{
    'value': ("term"),
    'searchContextEnabled': ("searchContextEnabled"),
    'searchContext': ("searchContext"),
    'id': ("search-term")
  },hashTypes:{'value': "ID",'searchContextEnabled': "ID",'searchContext': "ID",'id': "STRING"},hashContexts:{'value': depth0,'searchContextEnabled': depth0,'searchContext': depth0,'id': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\n");
  stack1 = helpers.each.call(depth0, "resultType", "in", "content.resultTypes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});
