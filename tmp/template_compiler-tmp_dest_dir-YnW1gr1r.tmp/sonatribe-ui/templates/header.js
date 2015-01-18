import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n        ");
  stack1 = (helper = helpers['em-modal-toggler'] || (depth0 && depth0['em-modal-toggler']),options={hash:{
    'modal-id': ("login"),
    'class': ("btn btn-primary")
  },hashTypes:{'modal-id': "STRING",'class': "STRING"},hashContexts:{'modal-id': depth0,'class': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-modal-toggler", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['em-modal-toggler'] || (depth0 && depth0['em-modal-toggler']),options={hash:{
    'modal-id': ("signup"),
    'class': ("btn btn-primary")
  },hashTypes:{'modal-id': "STRING",'class': "STRING"},hashContexts:{'modal-id': depth0,'class': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-modal-toggler", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "modal/create-account", options) : helperMissing.call(depth0, "render", "modal/create-account", options))));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "modal/login", options) : helperMissing.call(depth0, "render", "modal/login", options))));
  data.buffer.push("\n\n\n      ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("log in");
  }

function program4(depth0,data) {
  
  
  data.buffer.push("sign up");
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <li class='current-user dropdown'>\n            <a class='icon'\n               data-dropdown=\"user-dropdown\"\n               data-render=\"renderUserDropdown\"\n               href=\"#\"\n\n               id=\"current-user\">\n\n                 ");
  data.buffer.push(escapeExpression((helper = helpers['bound-avatar'] || (depth0 && depth0['bound-avatar']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data},helper ? helper.call(depth0, "currentUser.data", "medium", options) : helperMissing.call(depth0, "bound-avatar", "currentUser.data", "medium", options))));
  data.buffer.push("\n            </a>\n        </li>\n        ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "site-map", options) : helperMissing.call(depth0, "render", "site-map", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

  data.buffer.push("<div class='container'>\n  <div class='contents clearfix'>\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers['home-logo'] || (depth0 && depth0['home-logo']),options={hash:{
    'minimized': ("showExtraInfo")
  },hashTypes:{'minimized': "ID"},hashContexts:{'minimized': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "home-logo", options))));
  data.buffer.push("\n\n    <div class='panel clearfix'>\n\n      ");
  stack1 = helpers.unless.call(depth0, "session.isAuthenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      <ul class='icons clearfix' role='navigation'>\n        <li>\n            <a id='search-button'\n               class='icon expand'\n               href='#'\n               data-dropdown=\"search-dropdown\"\n               title='search mother fucker'>\n               ");
  data.buffer.push(escapeExpression((helper = helpers['icon-helper'] || (depth0 && depth0['icon-helper']),options={hash:{
    'label': ("search.title")
  },hashTypes:{'label': "STRING"},hashContexts:{'label': depth0},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "search", options) : helperMissing.call(depth0, "icon-helper", "search", options))));
  data.buffer.push("\n            </a>\n        </li>\n        <li class='categories dropdown'>\n\n           <a class='icon'\n               data-dropdown=\"site-map-dropdown\"\n               data-render=\"renderSiteMap\"\n               href=\"#\"\n               title='site map'\n               id=\"site-map\">\n               ");
  data.buffer.push(escapeExpression((helper = helpers['icon-helper'] || (depth0 && depth0['icon-helper']),options={hash:{
    'label': ("site_map")
  },hashTypes:{'label': "STRING"},hashContexts:{'label': depth0},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "bars", options) : helperMissing.call(depth0, "icon-helper", "bars", options))));
  data.buffer.push("\n            </a>\n\n        </li>\n         ");
  stack1 = helpers['if'].call(depth0, "currentUser", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </ul>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "search", options) : helperMissing.call(depth0, "render", "search", options))));
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "view.renderSiteMap", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "user-dropdown", options) : helperMissing.call(depth0, "render", "user-dropdown", options))));
  data.buffer.push("\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});
