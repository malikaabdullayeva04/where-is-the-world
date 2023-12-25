const elSiteThemeToggler = document.querySelector(".site-header-theme-toggler");

elSiteThemeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
