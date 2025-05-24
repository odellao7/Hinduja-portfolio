const styleSwitcherToggle = document.querySelector('.style-switcher-toggle');

styleSwitcherToggle.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
});
window.addEventListener('scroll', () => {
    if (document.querySelector('.style-switcher').classList.contains('open')) {
        document.querySelector('.style-switcher').classList.remove('open');
    }
});
function setActiveStyle(colorName) {
  const styles = document.querySelectorAll('.alternate-style');
  styles.forEach((style) => {
    if (style.getAttribute("title") === colorName) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
const dayNight = document.querySelector('.day-night');
const icon = dayNight.querySelector('i');

dayNight.addEventListener('click', () => {
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
});

window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')) {
        icon.classList.add('fa-sun');
        icon.classList.remove('fa-moon');
    } else {
        icon.classList.add('fa-moon');
        icon.classList.remove('fa-sun');
    }
});

