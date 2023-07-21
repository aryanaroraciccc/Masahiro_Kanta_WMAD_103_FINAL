// floating menu icon toggle

const floatingMenu = document.getElementById("floating-navigation-menu");
const floatingHamburgerIcon = document.getElementById(
  "floating-hamburger-icon"
);
const floatingMenuCloseIcon = document.getElementById(
  "floating-menu-close-icon"
);
const onOpenMenu = () => {
  floatingMenu.classList = "floating-navigation-menu";
};

const onCloseMenu = () => {
  floatingMenu.classList = "invisible";
};

floatingHamburgerIcon.addEventListener("click", () => onOpenMenu());
floatingMenuCloseIcon.addEventListener("click", () => onCloseMenu());