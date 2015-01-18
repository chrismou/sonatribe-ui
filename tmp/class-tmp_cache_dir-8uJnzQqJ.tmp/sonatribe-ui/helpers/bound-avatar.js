define("sonatribe-ui/helpers/bound-avatar", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var safe = Handlebars.SafeString;

    var Ember = __dependency1__["default"];

    function boundAvatar(user) {
      if (user != null && user.image != null) {
        return new safe("<img src=\"" + Sonatribe.SiteSettings.api_url + "image/" + user.image.name + "?size=avatarsquare\" />");
      } else if (user.image != null) {
        return new safe("<img src=\"" + Sonatribe.SiteSettings.api_url + "image/" + user.image.name + "?size=avatarsquare\" />");
      } else {
        return new safe("<img src=\"http://conversations.sonatribe.com/user_avatar/conversations.sonatribe.com/thestumonkey/25/13.png\" />");
      }
    }

    __exports__.boundAvatar = boundAvatar;

    __exports__["default"] = Ember.Handlebars.makeBoundHelper(boundAvatar);
  });