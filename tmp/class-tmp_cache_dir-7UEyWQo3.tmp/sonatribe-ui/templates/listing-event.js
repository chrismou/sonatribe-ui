define("sonatribe-ui/templates/listing-event", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

    function program1(depth0,data) {
      
      
      data.buffer.push("back to event");
      }

    function program3(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n        <button id=\"clear-completed\" ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleAttendance", "le", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
      data.buffer.push(">\n            don't go ");
      stack1 = helpers._triageMustache.call(depth0, "model.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n        </button>\n");
      return buffer;
      }

    function program5(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n        <button id=\"clear-completed\" ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleAttendance", "le", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
      data.buffer.push(">\n            lets go ");
      stack1 = helpers._triageMustache.call(depth0, "model.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n        </button>\n");
      return buffer;
      }

    function program7(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n	<li>");
      data.buffer.push(escapeExpression((helper = helpers['bound-avatar'] || (depth0 && depth0['bound-avatar']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data},helper ? helper.call(depth0, "user.data", "medium", options) : helperMissing.call(depth0, "bound-avatar", "user.data", "medium", options))));
      data.buffer.push("</li>\n");
      return buffer;
      }

    function program9(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n<li>artist ID: ");
      stack1 = helpers._triageMustache.call(depth0, "artist.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</li>\n<li>artist name: ");
      stack1 = helpers._triageMustache.call(depth0, "artist.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</li>\n<li>artist bio: ");
      stack1 = helpers._triageMustache.call(depth0, "artist.bio.content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</li>\n<br /> familiarity: ");
      stack1 = helpers._triageMustache.call(depth0, "artist.stats.familiarity", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<br /> hotttness: ");
      stack1 = helpers._triageMustache.call(depth0, "artist.stats.hotttnesss", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<br /> \ntracks:<br />\n");
      stack1 = helpers.each.call(depth0, "track", "in", "artist.tracks.track", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<br /> \nimages<br />\n");
      stack1 = helpers.each.call(depth0, "image", "in", "artist.images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<li>--------------------------------------------------------</li>\n");
      return buffer;
      }
    function program10(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n");
      stack1 = helpers._triageMustache.call(depth0, "track.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push(", \n");
      return buffer;
      }

    function program12(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n\n");
      data.buffer.push(escapeExpression((helper = helpers['image-helper'] || (depth0 && depth0['image-helper']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data},helper ? helper.call(depth0, "image", "square", options) : helperMissing.call(depth0, "image-helper", "image", "square", options))));
      data.buffer.push("\n\n");
      return buffer;
      }

      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "event-profile", "model.eventInstanceSlug", options) : helperMissing.call(depth0, "link-to", "event-profile", "model.eventInstanceSlug", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<br />\nname: ");
      stack1 = helpers._triageMustache.call(depth0, "model.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<br />\nstart: ");
      stack1 = helpers._triageMustache.call(depth0, "model.start", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<br />\nend: ");
      stack1 = helpers._triageMustache.call(depth0, "model.end", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<br>\n\n");
      stack1 = helpers['if'].call(depth0, "model.currentUserAttending", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\nusers attending: ");
      stack1 = helpers._triageMustache.call(depth0, "model.usersAttending.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<br>\n<ul>\n");
      stack1 = helpers.each.call(depth0, "user", "in", "model.usersAttending", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n</ul>\n\n<ul>\n");
      stack1 = helpers.each.call(depth0, "artist", "in", "model.artists", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n</ul>");
      return buffer;
      
    });
  });