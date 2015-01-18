define("sonatribe-ui/templates/modal/create-account", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

    function program1(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n");
      options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data}
      if (helper = helpers['em-modal-title']) { stack1 = helper.call(depth0, options); }
      else { helper = (depth0 && depth0['em-modal-title']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
      if (!helpers['em-modal-title']) { stack1 = blockHelperMissing.call(depth0, 'em-modal-title', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data}); }
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<!--the content of the modal...-->\n");
      options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data}
      if (helper = helpers['em-modal-body']) { stack1 = helper.call(depth0, options); }
      else { helper = (depth0 && depth0['em-modal-body']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
      if (!helpers['em-modal-body']) { stack1 = blockHelperMissing.call(depth0, 'em-modal-body', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data}); }
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<!--optional footer section of the modal, usually contains buttons-->\n");
      options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[],types:[],data:data}
      if (helper = helpers['em-modal-footer']) { stack1 = helper.call(depth0, options); }
      else { helper = (depth0 && depth0['em-modal-footer']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
      if (!helpers['em-modal-footer']) { stack1 = blockHelperMissing.call(depth0, 'em-modal-footer', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[],types:[],data:data}); }
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      }
    function program2(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n<!--optional toggler to close the opened modal-->\n");
      stack1 = (helper = helpers['em-modal-toggler'] || (depth0 && depth0['em-modal-toggler']),options={hash:{
        'class': ("close")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-modal-toggler", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<h4 class=\"modal-title\">signup</h4>\n");
      return buffer;
      }
    function program3(depth0,data) {
      
      
      data.buffer.push("x");
      }

    function program5(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n");
      stack1 = helpers.unless.call(depth0, "complete", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      }
    function program6(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n\n");
      stack1 = helpers.unless.call(depth0, "hasAuthOptions", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n<div>\n  <form id=\"form-register\" action=\"http://test.sonatribe.co.uk:1337/api/register\" method=\"POST\">\n    ");
      stack1 = helpers._triageMustache.call(depth0, "service-stack", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    <table>\n      <tr class=\"input\">\n        <td style=\"width:80px\" class=\"label\"><label for='new-account-name'>your full name</label></td>\n        <td style=\"width:496px\">\n          ");
      data.buffer.push(escapeExpression((helper = helpers['text-field'] || (depth0 && depth0['text-field']),options={hash:{
        'value': ("accountName"),
        'id': ("new-account-name"),
        'autofocus': ("autofocus")
      },hashTypes:{'value': "ID",'id': "STRING",'autofocus': "STRING"},hashContexts:{'value': depth0,'id': depth0,'autofocus': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "text-field", options))));
      data.buffer.push("\n          &nbsp;\n        </td>\n      </tr>\n      <tr class=\"instructions\">\n        <td></td>\n        <td><label>username instructions</label></td>\n      </tr>\n\n      <tr class=\"input\">\n        <td class=\"label\"><label for='new-account-email'>email</label></td>\n        <td>\n          ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'type': ("email"),
        'value': ("accountEmail"),
        'id': ("new-account-email"),
        'disabled': ("emailValidated")
      },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'disabled': "ID"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'disabled': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n          &nbsp;\n        </td>\n      </tr>\n      <tr class=\"instructions\">\n        <td></td>\n        <td><label>email instrutuions</label></td>\n      </tr>\n\n      <tr class=\"input\">\n        <td class=\"label\"><label for='new-account-username'>username</label></td>\n        <td>\n          ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'value': ("accountUsername"),
        'id': ("new-account-username"),
        'maxlength': ("maxUsernameLength")
      },hashTypes:{'value': "ID",'id': "STRING",'maxlength': "ID"},hashContexts:{'value': depth0,'id': depth0,'maxlength': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n          &nbsp;\n        </td>\n      </tr>\n      <tr class=\"instructions\">\n        <td></td>\n        <td><label>username</label></td>\n      </tr>\n\n      ");
      stack1 = helpers['if'].call(depth0, "passwordRequired", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n      <tr class=\"password-confirmation\">\n        <td><label for='new-account-password-confirmation'>confirm password</label></td>\n        <td>\n          ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'type': ("password"),
        'value': ("accountPasswordConfirm"),
        'id': ("new-account-confirmation")
      },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n          ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'value': ("accountChallenge"),
        'id': ("new-account-challenge")
      },hashTypes:{'value': "ID",'id': "STRING"},hashContexts:{'value': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n        </td>\n      </tr>\n\n    </table>\n\n    ");
      stack1 = helpers['if'].call(depth0, "userFields", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n    <div id='modal-alert'></div>\n\n  </form>\n</div>\n\n");
      return buffer;
      }
    function program7(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n<a ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'href': ("facebook_login_url")
      },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">facebook</a>\n<a ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'href': ("twitter_login_url")
      },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">twitter</a>\n");
      return buffer;
      }

    function program9(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n      <tr class=\"input\">\n        <td class=\"label\"><label for='new-account-password'>password</label></td>\n        <td>\n          ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'value': ("accountPassword"),
        'type': ("password"),
        'id': ("new-account-password"),
        'capsLockOn': ("capsLockOn")
      },hashTypes:{'value': "ID",'type': "STRING",'id': "STRING",'capsLockOn': "ID"},hashContexts:{'value': depth0,'type': depth0,'id': depth0,'capsLockOn': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n          &nbsp;\n        </td>\n      </tr>\n      <tr class=\"instructions\">\n        <td></td>\n        <td>\n          <label>");
      stack1 = helpers._triageMustache.call(depth0, "passwordInstructions", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</label>\n          <div ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'class': (":caps-lock-warning capsLockOn::invisible")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push("><i class=\"fa fa-exclamation-triangle\"></i> campslock</div>\n        </td>\n      </tr>\n      ");
      return buffer;
      }

    function program11(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n    <div class='user-fields'>\n      ");
      stack1 = helpers.each.call(depth0, "userFields", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    </div>\n    ");
      return buffer;
      }
    function program12(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n      ");
      data.buffer.push(escapeExpression((helper = helpers['user-field'] || (depth0 && depth0['user-field']),options={hash:{
        'field': ("field"),
        'value': ("value")
      },hashTypes:{'field': "ID",'value': "ID"},hashContexts:{'field': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "user-field", options))));
      data.buffer.push("\n      ");
      return buffer;
      }

    function program14(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n");
      stack1 = (helper = helpers['em-modal-toggler'] || (depth0 && depth0['em-modal-toggler']),options={hash:{
        'class': ("btn btn-default")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(15, program15, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-modal-toggler", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      }
    function program15(depth0,data) {
      
      
      data.buffer.push("Close");
      }

      stack1 = (helper = helpers['em-modal'] || (depth0 && depth0['em-modal']),options={hash:{
        'configName': ("bs"),
        'id': ("signup")
      },hashTypes:{'configName': "STRING",'id': "STRING"},hashContexts:{'configName': depth0,'id': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-modal", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });