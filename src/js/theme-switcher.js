// Switchers ------------------------------------------------------------
const desktopSwitcher = document.querySelector('#desktopSwitcher');
const mobileSwitcher = document.querySelector('#mobileSwitcher');

// Functions ------------------------------------------------------------
const setTheme = themeName => {
  document.querySelector('body').setAttribute('class', `${themeName}`);
  localStorage.setItem('myTheme', themeName);
};

const checkTheme = () => {
  if (
    localStorage.getItem('myTheme') === null ||
    localStorage.getItem('myTheme') === 'light'
  ) {
    setTheme('light');
    mobileSwitcher.checked = false;
    desktopSwitcher.checked = false;
  } else if (localStorage.getItem('myTheme') === 'dark') {
    setTheme('dark');
    mobileSwitcher.checked = true;
    desktopSwitcher.checked = true;
  }
};

checkTheme();

// Сheckboxes Listeners -------------------------------------------------
mobileSwitcher.addEventListener('click', () => {
  setTheme(mobileSwitcher.checked ? 'dark' : 'light');
});
desktopSwitcher.addEventListener('click', () => {
  setTheme(desktopSwitcher.checked ? 'dark' : 'light');
});
