const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
const checkbox = document.querySelector('#theme-switch-toggle');

checkbox.addEventListener('change', onCheckboxChange);

function onCheckboxChange() {
  if (checkbox.checked) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);

    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);

    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const currentTheme = localStorage.getItem('theme');
if (currentTheme === Theme.DARK) {
  checkbox.checked = true;
  body.classList.add(Theme.DARK);
}
