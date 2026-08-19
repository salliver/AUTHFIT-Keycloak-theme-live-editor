(function () {
  "use strict";

  function setup(button) {
    if (button.dataset.pwBound) return;
    button.dataset.pwBound = "1";

    var inputId = button.getAttribute("aria-controls");
    var input = inputId ? document.getElementById(inputId) : null;
    if (!input) {
      var group = button.closest(".input-group");
      input = group ? group.querySelector("input.form-input") : null;
    }
    if (!input) return;

    var iconShow = button.dataset.iconShow || "icon-eye";
    var iconHide = button.dataset.iconHide || "icon-eye-slash";
    var labelShow = button.dataset.labelShow || "Show password";
    var labelHide = button.dataset.labelHide || "Hide password";
    var icon = button.querySelector("i") || button;

    button.addEventListener("click", function () {
      var showing = input.type === "text";
      input.type = showing ? "password" : "text";
      button.setAttribute("aria-label", showing ? labelShow : labelHide);
      if (icon.classList) {
        icon.classList.remove(iconShow, iconHide);
        icon.classList.add(showing ? iconShow : iconHide);
      }
    });
  }

  function init() {
    var nodes = document.querySelectorAll("[data-password-toggle]");
    Array.prototype.forEach.call(nodes, setup);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
