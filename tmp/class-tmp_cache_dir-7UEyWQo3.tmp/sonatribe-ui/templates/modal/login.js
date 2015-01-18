define("sonatribe-ui/templates/modal/login", 
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
      data.buffer.push("\n\n<button class=\"btn btn-large btn-primary\"\n");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'disabled': ("loginDisabled")
      },hashTypes:{'disabled': "STRING"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
      data.buffer.push("\n");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push(">\n<i class=\"fa fa-unlock\"></i>&nbsp;login\n</button>\n\n\n&nbsp;\n<button class=\"btn btn-large\" id=\"new-account-link\" ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "createAccount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push(">\n  create account\n</button>\n\n\n\n");
      stack1 = helpers['if'].call(depth0, "authenticate", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n");
      stack1 = helpers['if'].call(depth0, "showSpinner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data}
      if (helper = helpers['em-modal-footer']) { stack1 = helper.call(depth0, options); }
      else { helper = (depth0 && depth0['em-modal-footer']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
      if (!helpers['em-modal-footer']) { stack1 = blockHelperMissing.call(depth0, 'em-modal-footer', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data}); }
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
      data.buffer.push("\n<h4 class=\"modal-title\">login</h4>\n");
      return buffer;
      }
    function program3(depth0,data) {
      
      
      data.buffer.push("x");
      }

    function program5(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n\n\n<a ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "authenticateFacebook", "facebook-oauth2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
      data.buffer.push(">facebook</a>\n\n<a ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'href': ("twitter_login_url")
      },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">twitter</a>\n<form id='login-form' method='post'>\n  <div>\n    <table>\n      <tr>\n        <td>\n          <label for='login-account-name'>User&nbsp;</label>\n        </td>\n        <td>\n          ");
      data.buffer.push(escapeExpression((helper = helpers['text-field'] || (depth0 && depth0['text-field']),options={hash:{
        'value': ("loginName"),
        'placeholderKey': ("login.email_placeholder"),
        'id': ("login-account-name"),
        'autocorrect': ("off"),
        'autocapitalize': ("off"),
        'autofocus': ("autofocus")
      },hashTypes:{'value': "ID",'placeholderKey': "STRING",'id': "STRING",'autocorrect': "STRING",'autocapitalize': "STRING",'autofocus': "STRING"},hashContexts:{'value': depth0,'placeholderKey': depth0,'id': depth0,'autocorrect': depth0,'autocapitalize': depth0,'autofocus': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "text-field", options))));
      data.buffer.push("\n        </td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>\n          <label for='login-account-password'>Password&nbsp;</label>\n        </td>\n        <td>\n          ");
      data.buffer.push(escapeExpression((helper = helpers['text-field'] || (depth0 && depth0['text-field']),options={hash:{
        'value': ("loginPassword"),
        'type': ("password"),
        'id': ("login-account-password"),
        'maxlength': ("200"),
        'capsLockOn': ("capsLockOn")
      },hashTypes:{'value': "ID",'type': "STRING",'id': "STRING",'maxlength': "STRING",'capsLockOn': "ID"},hashContexts:{'value': depth0,'type': depth0,'id': depth0,'maxlength': depth0,'capsLockOn': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "text-field", options))));
      data.buffer.push(" &nbsp;\n        </td>\n        <td>\n          <a id=\"forgot-password-link\" ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "showForgotPassword", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push(">Forgot password</a>\n        </td>\n      </tr>\n      <tr>\n        <td></td>\n        <td><div ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'class': (":caps-lock-warning capsLockOn::invisible")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push("><i class=\"fa fa-exclamation-triangle\"></i> caps lock warning</div></td>\n        <td></td>\n      </tr>\n    </table>\n  </div>\n</form>\n</div>\n<div id='login-alert'>");
      stack1 = helpers._triageMustache.call(depth0, "alert", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</div>\n\n<div id='modal-alert'></div>\n\n\n\n\n");
      return buffer;
      }

    function program7(depth0,data) {
      
      
      data.buffer.push("\n&nbsp; authenticating\n");
      }

    function program9(depth0,data) {
      
      
      data.buffer.push("\n&nbsp; <i class='fa fa-spinner fa-spin'></i>\n");
      }

    function program11(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n");
      stack1 = (helper = helpers['em-modal-toggler'] || (depth0 && depth0['em-modal-toggler']),options={hash:{
        'class': ("btn btn-default")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(12, program12, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-modal-toggler", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      }
    function program12(depth0,data) {
      
      
      data.buffer.push("Close");
      }

      stack1 = (helper = helpers['em-modal'] || (depth0 && depth0['em-modal']),options={hash:{
        'configName': ("bs"),
        'id': ("login")
      },hashTypes:{'configName': "STRING",'id': "STRING"},hashContexts:{'configName': depth0,'id': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-modal", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });