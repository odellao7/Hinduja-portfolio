function setActiveStyle(colorName) {
  const styles = document.querySelectorAll('.alternate-style');
  styles.forEach((style) => {
    if (style.getAttribute('title') === colorName) {
      style.removeAttribute('disabled');
    } else {
      style.setAttribute('disabled', 'true');
    }
  });
}
function toggleNav() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("open");
}

window.addEventListener("DOMContentLoaded", () => {
  // Clone the nav items from the sidebar
  const mainNav = document.getElementById("main-nav");
  const mobileNav = document.getElementById("mobile-nav");

  if (mainNav && mobileNav) {
    mobileNav.innerHTML = mainNav.innerHTML;
  }
});
// Toggle sidebar on button click
document.querySelector('.nav-toggler').addEventListener('click', function() {
  document.querySelector('.aside').classList.toggle('active');
});
function toggleNav() {
    document.querySelector(".aside").classList.toggle("active");
  }
>
  document.addEventListener("DOMContentLoaded", () => {
    // Clone main nav to mobile nav
    const mainNav = document.querySelector("#main-nav");
    const mobileNav = document.querySelector("#mobile-nav");

    if (mainNav && mobileNav) {
      mobileNav.innerHTML = mainNav.innerHTML;
    }
  });


