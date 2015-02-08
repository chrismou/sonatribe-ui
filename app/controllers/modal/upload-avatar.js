import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
   useUploadedAvatar: function() { this.set("selected", "uploaded"); },
   useGravatar: function() { this.set("selected", "gravatar"); },
   useSystem: function() { this.set("selected", "system"); },
   refreshGravatar: function() {
    //  var self = this;
    //  self.set("gravatarRefreshDisabled", true);
    //  Discourse
    //      .ajax("/user_avatar/" + this.get("username") + "/refresh_gravatar", {method: 'POST'})
    //      .then(function(result){
    //        self.set("gravatarRefreshDisabled", false);
    //        self.set("gravatar_avatar_upload_id", result.upload_id);
    //      });
   }
 }
});
