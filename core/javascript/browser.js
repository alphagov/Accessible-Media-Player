// Extracted from jQuery and jQuery migrator
// https://gist.github.com/adeelejaz/4714079
// https://code.jquery.com/jquery-1.7.2.js
(function(window) {
  "use strict";
  window.NOMENSA = window.NOMENSA || {};

  var matched, browser, uaMatch;

  uaMatch = function( ua ) {
    ua = ua.toLowerCase();

    var match = /(msie) ([\w.]+)/.exec( ua ) ||
      ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
      [];

    return {
      browser: match[ 1 ] || "",
      version: match[ 2 ] || "0"
    };
  };

  matched = uaMatch( window.navigator.userAgent );
  browser = {};

  if ( matched.browser ) {
    browser[ matched.browser ] = true;
    browser.version = matched.version;
  }

  window.NOMENSA.browser = browser;
})(window);
