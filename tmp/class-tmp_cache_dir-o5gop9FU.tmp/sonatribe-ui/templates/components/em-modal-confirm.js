define("sonatribe-ui/templates/components/em-modal-confirm", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

    function program1(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n    ");
      stack1 = (helper = helpers['em-modal-title'] || (depth0 && depth0['em-modal-title']),options={hash:{
        'classes': ("modal-title-classes")
      },hashTypes:{'classes': "ID"},hashContexts:{'classes': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-modal-title", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    ");
      options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data}
      if (helper = helpers['em-modal-body']) { stack1 = helper.call(depth0, options); }
      else { helper = (depth0 && depth0['em-modal-body']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
      if (!helpers['em-modal-body']) { stack1 = blockHelperMissing.call(depth0, 'em-modal-body', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data}); }
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    ");
      options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[],types:[],data:data}
      if (helper = helpers['em-modal-footer']) { stack1 = helper.call(depth0, options); }
      else { helper = (depth0 && depth0['em-modal-footer']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
      if (!helpers['em-modal-footer']) { stack1 = blockHelperMissing.call(depth0, 'em-modal-footer', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[],types:[],data:data}); }
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      }
    function program2(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n        ");
      stack1 = (helper = helpers['em-modal-toggler'] || (depth0 && depth0['em-modal-toggler']),options={hash:{
        'class': ("close")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-modal-toggler", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n        <h4 class=\"modal-title\">");
      stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</h4>\n    ");
      return buffer;
      }
    function program3(depth0,data) {
      
      
      data.buffer.push("<span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>");
      }

    function program5(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n        ");
      stack1 = helpers._triageMustache.call(depth0, "message", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n        ");
      stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n        <!--Confirmation with a reason-->\n        ");
      stack1 = helpers['if'].call(depth0, "reasonModal", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    ");
      return buffer;
      }
    function program6(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n        ");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
        'valueBinding': ("message"),
        'contentBinding': ("messages"),
        'optionValuePath': ("id"),
        'optionLabelPath': ("content.msg")
      },hashTypes:{'valueBinding': "STRING",'contentBinding': "STRING",'optionValuePath': "STRING",'optionLabelPath': "STRING"},hashContexts:{'valueBinding': depth0,'contentBinding': depth0,'optionValuePath': depth0,'optionLabelPath': depth0},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push("\n        ");
      return buffer;
      }

    function program8(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n        ");
      data.buffer.push(escapeExpression((helper = helpers['em-button'] || (depth0 && depth0['em-button']),options={hash:{
        'class': ("cancel-button-classes"),
        'on-click': ("confirmPressed"),
        'default': ("submit-button-title"),
        'icon-default': ("submit-button-default-icons"),
        'icon-executing': ("submit-button-execute-icons"),
        'executing': ("submit-button-submitting-title")
      },hashTypes:{'class': "ID",'on-click': "STRING",'default': "ID",'icon-default': "ID",'icon-executing': "ID",'executing': "ID"},hashContexts:{'class': depth0,'on-click': depth0,'default': depth0,'icon-default': depth0,'icon-executing': depth0,'executing': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-button", options))));
      data.buffer.push("\n        ");
      stack1 = (helper = helpers['em-modal-toggler'] || (depth0 && depth0['em-modal-toggler']),options={hash:{
        'class': ("submit-button-classes")
      },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-modal-toggler", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    ");
      return buffer;
      }
    function program9(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n            <i class=\"fa fa-thumbs-o-down\"></i>\n            ");
      stack1 = helpers._triageMustache.call(depth0, "cancel-button-title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n        ");
      return buffer;
      }

      stack1 = (helper = helpers['em-modal'] || (depth0 && depth0['em-modal']),options={hash:{
        'id': ("confirm-id"),
        'configName': ("configName"),
        'model-id': ("model-id"),
        'open-if': ("open-if"),
        'close-if': ("close-if"),
        'on-hide': ("on-hide")
      },hashTypes:{'id': "ID",'configName': "ID",'model-id': "ID",'open-if': "ID",'close-if': "ID",'on-hide': "ID"},hashContexts:{'id': depth0,'configName': depth0,'model-id': depth0,'open-if': depth0,'close-if': depth0,'on-hide': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-modal", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      else { data.buffer.push(''); }
      
    });
  });