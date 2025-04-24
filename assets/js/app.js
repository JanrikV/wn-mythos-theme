/*
  Mythos
  Based on Identity-Theme by HTML5 UP
  html5up.net | @n33co

  bg.jpg @freepik.com
  by wirestock

*/

$(document).ready(function () {
  $("body").removeClass("is-loading");

  /*
   * Hide navbar when clicking outside of it
   */
  $(document).click(function (event) {
    var target = $(event.target),
      navbarCollapse = $(".navbar-collapse");
    !navbarCollapse.hasClass("in") ||
      target.hasClass("navbar-toggle") ||
      navbarCollapse.collapse("hide");
  });

  /*
   * Google Analytics fallback
   */
  if (typeof gtag !== "function") {
    gtag = function () {
      console.log("GoogleAnalytics not present.");
    };
  }

  /*
   * Detect IE and add class
   */
  if ("addEventListener" in window) {
    $("body").addClass(
      navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? "is-ie" : ""
    );
  }

  $(".navbar-toggle").click(function () {
    $(this).toggleClass("collapsed");
  });
});
