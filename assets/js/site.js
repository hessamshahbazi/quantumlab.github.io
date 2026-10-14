// Interface behaviour shared by every page: mobile menu and footer year.
(() => {
  "use strict";

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");
  const desktop = window.matchMedia("(min-width: 66rem)");

  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
  };

  if (toggle && nav) {
    toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) setOpen(false);
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    desktop.addEventListener("change", (event) => {
      if (event.matches) setOpen(false);
    });
  }

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
})();
