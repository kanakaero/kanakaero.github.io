/*!
 * Greedy Navigation v1.0
 * https://github.com/lukejacksonn/GreedyNav
 */

var GreedyNav = (function () {
  "use strict";

  function init() {
    var nav = document.querySelector(".greedy-nav");
    if (!nav) return;

    var btn = nav.querySelector(".greedy-nav__toggle");
    var visibleLinks = nav.querySelector(".visible-links");
    var hiddenLinks = nav.querySelector(".hidden-links");

    // Show/hide the menu
    btn.classList.remove("hidden");
    btn.addEventListener("click", function () {
      hiddenLinks.classList.toggle("hidden");
    });
  }

  return init;
})();

