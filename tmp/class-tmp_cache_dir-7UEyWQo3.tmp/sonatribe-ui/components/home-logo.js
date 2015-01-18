define("sonatribe-ui/components/home-logo", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Component.extend({
      classNames: ["title"],
      bigLogoUrl: Sonatribe.SiteSettings.logo_url,
      title: Sonatribe.SiteSettings.title,
      linkUrl: (function () {
        return "";
      }).property(),

      showSmallLogo: (function () {
        return false;
      }).property("minimized"),

      showMobileLogo: (function () {
        return false;
      }).property() });
  });